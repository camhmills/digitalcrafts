const Sequelize = require("sequelize");
const { User } = require("./models");
console.log(User);
const express = require("express");
const app = express();
const PORT = 3006;

app.use(express.json());

app.post("/createuser", async (req, res) => {
    const { firstName, lastName, email } = req.body;

    const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send(`Inserted new user ${newUser.id}`)
})

app.post("/getuser/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.send(user)
})

app.listen(PORT, console.log(`Listening on ${PORT}`));