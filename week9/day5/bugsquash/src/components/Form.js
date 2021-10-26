import React, { useState } from 'react';



export default function ExampleOne(props){
    const [userName, setuserName] = useState({})
    const {listOfNames, setListOfNames} = props
    console.log(userName)
    console.log(listOfNames)
    return(
        <div>
            <label>Enter your name:</label>
            <input onChange={(e) =>
                setuserName({[e.target.name]:e.target.value})
                }
                name = "userName"
                type="text"
                placeholder="Name"
            />
            <button onClick={()=> {setListOfNames([...listOfNames, userName])}}>
                Submit
            </button>
        </div>
    )
}