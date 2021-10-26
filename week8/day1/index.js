const express = require("express");
const app = express();
const creds = require("./db");

app.use(express.json());

const PORT = 3006

app.get("/cars", (req, res) => {
    creds.connect((err, client, release) => {
        if(err) {
            return console.log("Error connecting to client", err.stack);
        }
        client.query('SELECT * FROM cars', (err, results) => {
        if(err) {
            res.status(400).send(err.stack);
        }
        res.status(200).send(results.rows);
        });
    });
});
app.get("/orders", (req, res) => {
    creds.connect((err, client, release) => {
        if(err) {
            return console.log("Error connecting to client", err.stack);
        }
        client.query('SELECT * FROM orders', (err, results) => {
        if(err) {
            res.status(400).send(err.stack);
        }
        res.status(200).send(results.rows);
        });
    });
});
app.get("/customers", (req, res) => {
    creds.connect((err, client, release) => {
        if(err) {
            return console.log("Error connecting to client", err.stack);
        }
        client.query('SELECT * FROM customers', (err, results) => {
        if(err) {
            res.status(400).send(err.stack);
        }
        res.status(200).send(results.rows);
        });
    });
});

app.post("/customers", (req, res) => {
    console.log(req.body.customer_name)
    creds.connect((err, client, release) => {
        if(err) {
            return console.log("Error connecting to client", err.stack);
        }
        client.query(
            `INSERT INTO customers VALUES (${req.body.id}, '${req.body.customer_name}')`,
        (err, results) => {
            if(err) {
                res.status(400).send(err.stack);
            }
            res.status(200).send(results.rows);
        });
    });
});


app.listen(PORT, console.log(`Listening on port ${PORT}`))