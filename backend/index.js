import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

// Set up SQLite database
const db = new sqlite3.Database("./Evsforall.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS userinfo (
    username TEXT PRIMARY KEY NOT NULL,
    password TEXT NOT NULL
  )
`);


db.run(`
  CREATE TABLE IF NOT EXISTS starred_vehicles (
    username TEXT NOT NULL,
    vehicle_id TEXT NOT NULL,
    price Integer,
    PRIMARY KEY (username, vehicle_id),
    FOREIGN KEY (username) REFERENCES userinfo(username)
  )
`);


db.run(`
  CREATE TABLE IF NOT EXISTS vehicle_info (
    vehicle_id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price Integer,
    image_url TEXT,
    Capacity INTEGER
    )
`) ;


// JWT Secret Key
const JWT_SECRET = 'test'; // Replace with your actual secret key

// Signup route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  // Check if the username already exists
  const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
  db.get(checkIfExist, [username], async (err, row) => {
    if (err) {
      return res.status(500).send("Error checking username");
    }

    if (row) {
      return res.status(409).send("Username already exists");
    }

    // Hash the password
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user into the database
      const insert = "INSERT INTO userinfo (username, password) VALUES (?, ?)";
      db.run(insert, [username, hashedPassword], (insertErr) => {
        if (insertErr) {
          return res.status(500).send("Error creating new user");
        }
        res.status(201).send("User created successfully");
      });
    } catch (hashError) {
      res.status(500).send("Error hashing password");
    }
  });
});

// Login route with JWT
app.post("/login", (req, res) => {
  const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
  db.get(checkIfExist, [req.body.username], (err, data) => {
    if (err) {
      console.error("SQLite error:", err);
      return res.status(500).send("An error occurred while checking the username.");
    }

    if (data) {
      const storedPassword = data.password;
      bcrypt.compare(req.body.password, storedPassword, (bcryptErr, result) => {
        if (result) {
          const token = jwt.sign({ username: req.body.username }, JWT_SECRET, {
            expiresIn: '24h'
          });
          res.json({ token: token });
        } else {
          res.status(401).send("Invalid credentials");
        }
      });
    } else {
      res.status(404).send("Username not found");
    }
  });
});

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Invalid Token");
    }
    req.user = user;
    next();
  });
};

// Star a vehicle route
app.post("/star-vehicle", authenticateToken, (req, res) => {
  const { vehicle_id } = req.body;
  const username = req.user.username;
  const { price } = req.body;
  const insert = "INSERT INTO starred_vehicles (username, vehicle_id,price) VALUES (?, ?, ?)";
  console.log("Price " + price);
  db.run(insert, [username, vehicle_id, price], (err) => {
    if (err) {
      return res.status(500).send("Error starring the vehicle");
    }
    res.status(200).send("Vehicle starred successfully");
  });
});

// Unstar a vehicle route
app.post("/is-starred", authenticateToken, (req, res) => {
  const { vehicle_id } = req.body;
  const username = req.user.username;
    const query = "SELECT COUNT(*) AS cnt FROM starred_vehicles WHERE username = '" + username + "' AND vehicle_id = '" + vehicle_id + "'" ;
//    console.log(query)
    db.get(query, (err, row) => {  
//      console.log('vehicle_id : ' + vehicle_id + ' count : ' + row.cnt  + ' err : ' + err)
    if (err) {
      return res.status(500).send("Error getting the status");
    }else {
      // If count is greater than 0, the record exists
      if (row.cnt > 0) {
          res.send(true);
      } else {
          res.send(false);
      }
  }
  });
});

// Unstar a vehicle route
app.delete("/unstar-vehicle", authenticateToken, (req, res) => {
  const { vehicle_id } = req.body;
  const username = req.user.username;
  const del = "DELETE FROM starred_vehicles WHERE username = ? AND vehicle_id = ?";
  db.run(del, [username, vehicle_id], (err) => {
    if (err) {
      return res.status(500).send("Error unstarring the vehicle");
    }
    res.status(200).send("Vehicle unstarred successfully");
  });
}); // This was missing

// Get all starred vehicles for a user
app.get("/user-stars", authenticateToken, (req, res) => {
  const username = req.user.username;
  const query = `
    SELECT vi.*
    FROM starred_vehicles sv
    JOIN vehicle_info vi ON sv.vehicle_id = vi.vehicle_id
    WHERE sv.username = ?`;
  db.all(query, [username], (err, rows) => {
    if (err) {
      return res.status(500).send("Error fetching starred vehicles");
    }
    res.status(200).json(rows);
  });
});

const port = 8800;
app.listen(port, () => {
  console.log(`Connected to backend`);
});
