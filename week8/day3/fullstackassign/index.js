const Sequelize = require("sequelize");
const { todo } = require("./models");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3006;


app.use(express.json());
app.use("/js", express.static(path.join(__dirname, "js")))
app.use(cors());

const es6Render = require("express-es6-template-engine");
app.engine("html", es6Render);
app.set("views", "templates");
app.set("view engine", "html");

app.post("/createatask", async (req, res) => {
    const { todoitem } = req.body;
    const task = await todo.create({
        todoitem: todoitem
    });
    res.send(`Successfully added task ${task.id}.`)
});

app.get("/", async (req, res) => {
    const todoitem = await todo.findAll();
    res.render("index", 
    {
        locals: 
            { todoitem: todoitem,
            title: 'Welcome!' }
        }
    );
});

app.get("/getatask/:id", async (req, res) => {
    const todoitem = await todo.findByPk(req.params.id)
    res.send(todoitem)
});

app.post("/deletetask/:id", async (req, res) => {
    const todoitem = await todo.destroy({
        where: { id: req.params.id }
    })
    res.send("Task deleted successfully.")
})

app.post("/updatetask/:id", async (req, res) => {
    const todoitem = await todo.update(req.body, {
        where: { id: req.params.id },
    })
    res.send("Task updated successfully.")
})

app.listen(PORT, console.log(`Listening on ${PORT}`));