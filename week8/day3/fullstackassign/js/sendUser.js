
const addButton = document.querySelector('.addButton-1')
const deleteButton = document.querySelector('.deleteButton')
const updateButton = document.querySelector('.updateButton')

const addTask = async () => {
    const todoitem = document.querySelector(".taskBox").value
    const url = "http://localhost:3006/createatask";
    
    taskObject = { todoitem };

    const taskData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskObject),
    })
}

const deleteTask = async () => {
    const id = document.querySelector(".idBox").value

    const url = `http://localhost:3006/deletetask/${id}`;
    const taskData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type" : "application/json"
        },
    
    })
    console.log("Deleted a task")  
}

const updateTask = async () => {
    const todoitem = document.querySelector(".taskBox").value
    const id = document.querySelector(".idBox").value
    const url = `http://localhost:3006/updatetask/${id}`;

    taskObject = { todoitem };

    const taskData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(taskObject),
        
    })
}

addButton.addEventListener('click', () => addTask())
deleteButton.addEventListener('click', () => deleteTask())
updateButton.addEventListener('click', () => updateTask())