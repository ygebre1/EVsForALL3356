import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();
app.use(cors());
app.use(express.json());

// Change the database connection to SQLite
const db = new sqlite3.Database("./database.sqlite"); // or use a file path to persist data

// Create the userinfo table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS userinfo (
    username TEXT PRIMARY KEY NOT NULL,
    password TEXT NOT NULL
  )
`);


app.get("/", (req, res) => {
  res.json("hello");
});

app.post("/logins", (req, res) => {
  const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
  db.get(checkIfExist, [req.body.username], (err, data) => {
    if (err) {
      console.error("SQLite error:", err);
      return res.status(500).send("An error occurred while checking the username.");
    }

    if (data) {
      const storedPassword = data.password;
      bcrypt.compare(req.body.password, storedPassword, (bcryptErr, result) => {
        if (bcryptErr) {
          console.error("Bcrypt error:", bcryptErr);
          return res.status(500).send("An error occurred during login.");
        }

        if (result) {
          return res.status(200).send("Login successful.");
        } else {
          return res.status(401).send("Incorrect username or password.");
        }
      });
    } else {
      return res.status(401).send("Incorrect username or password.");
    }
  });
});

app.post("/signup", (req, res) => {
  const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
  db.get(checkIfExist, [req.body.username], (err, data) => {
    if (err) {
      console.error("SQLite error:", err);
      return res.status(500).send("An error occurred while checking the username.");
    }

    if (data) {
      console.log("Username already exists");
      return res.status(409).send("Username already exists.");
    }

    bcrypt.hash(req.body.password, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        console.error("Bcrypt hash error:", hashErr);
        return res.status(500).send("An error occurred during signup.");
      }

      const insertUser = "INSERT INTO userinfo(username, password) VALUES (?, ?)";
      const values = [req.body.username, hashedPassword];

      db.run(insertUser, values, function (insertErr) {
        if (insertErr) {
          console.error("SQLite error on insert:", insertErr);
          return res.status(500).send("An error occurred during the signup process.");
        }

        // Send back a success response with the inserted user's ID
        return res.status(201).json({ success: true, data: { id: this.lastID } });
      });
    });
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});