const cowsay = require('cowsay')
const express = require('express')
const app = express()
 
app.get('/moo', function (req, res) {
    console.log(req.body)
    res.send(cowsay.say({
      text: "I love mooooovies",
      e: "Oo",
      T: "U "
  }))
});

app.post("/cats", (req, res) => {
    res.send("Meow")
})
 
app.put("/dogs", (req, res) => {
    res.send("Bark")
})

app.listen(3000, console.log("I'm on port 3000"));

