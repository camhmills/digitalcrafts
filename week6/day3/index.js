require('dotenv').config()
const express = require('express');
const token = process.env.API_TOKEN;
const URL = process.env.URL;

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  URL,
  token
);

console.log(URL);
console.log(token);

const app = express();

app.use(express.json());

const PORT = 3001;

//add stocks
app.post("/createStock", async (req, res) => {
    console.log(req.body);
    const { data, error } = await supabase.from("stocks")
    .insert([req.body]);
    
    res.send(data);
});

//delete stocks
app.delete("/deleteStock/:id", async (req, res) => {
    const id = req.params.id
    console.log(req.params.id);
    const { data, error } = await supabase
        .from("stocks")
        .delete()
        .match({ id: id });
    res.send(data);
});

//view all stocks
app.get("/viewStocks", async (req, res) => {
    console.log(req.body);
    const { data, error } = await supabase.from("stocks")
    .select();
    res.send(data);
});

//update individual stock
app.get("/updateStock/:id", async (req, res) => {
    const id = req.params.id
    console.log(req.params.id);
    const { data, error } = await supabase
        .from("stocks")
        .update(req.body)
        .match({ id: id });
    res.send(data);
});

app.listen(PORT, console.log(`Listening on port ${PORT}`))