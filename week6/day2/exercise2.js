const PORT = 3001
const express = require("express")
const app = express()

// Write your routes between the ***

const es6Render = require("express-es6-template-engine");
app.engine("html", es6Render);
app.set("views", "templates");
app.set("view engine", "html");

// ***
app.get('/n&e', function (req, res) {
    res.send("Node and express are just lovely")
})

app.post('/cities', function (req, res) {
    res.send
})
// ***

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})