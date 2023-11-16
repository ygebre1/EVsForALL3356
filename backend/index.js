import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//change to yalls database info 
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "justin910113",
  database: "evforall",
});

app.get("/", (req, res) => {
    res.json("hello");
  });

  app.post("/logins", (req, res) => {
    // Check if the username exists in the database
    const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
    db.query(checkIfExist, [req.body.username], (err, data) => {
      if (err) {
        // If there's a SQL error, send a 500 Internal Server Error
        console.error("SQL error:", err);
        return res.status(500).send("An error occurred while checking the username.");
      }
      
      if (data.length > 0) {
        // Check if the provided password matches the stored password
        const storedPassword = data[0].password;
        if (req.body.password === storedPassword) {
          // Passwords match, login successful
          return res.status(200).send("Login successful.");
        } else {
          // Passwords do not match
          return res.status(401).send("Incorrect username or password.");
        }
      } else {
        // Username does not exist
        return res.status(401).send("Incorrect username or password.");
      }
    });
  });
  

app.post("/signup", (req, res) => {
    // Check if the username already exists in the database
    const checkIfExist = "SELECT * FROM userinfo WHERE username = ?";
    db.query(checkIfExist, [req.body.username], (err, data) => {
      if (err) {
        // If there's a SQL error, send a 500 Internal Server Error
        console.error("SQL error:", err);
        return res.status(500).send("An error occurred while checking the username.");
      }
      
      if (data.length) {
        // If the username exists, send a 409 Conflict
        console.log("Username already exists");
        return res.status(409).send("Username already exists.");
      }
      
      // If no error and username doesn't exist, proceed to insert the new user
      const insertUser = "INSERT INTO userinfo(`username`, `password`) VALUES (?)";
      const values = [
        req.body.username,
        req.body.password, // You should hash passwords before storing them!
      ];
      
      db.query(insertUser, [values], (insertErr, insertData) => {
        if (insertErr) {
          // Handle potential SQL error during insert
          console.error("SQL error on insert:", insertErr);
          return res.status(500).send("An error occurred during the signup process.");
        }
        // Send back a success response
        return res.status(201).json({ success: true, data: insertData });
      });
    });
  });
  


app.listen(8800, () => {
  console.log("Connected to backend.");
});