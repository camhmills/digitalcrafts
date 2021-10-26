import { useState } from 'react'

const DB = (props) => {
    const {userList} = props
    console.log(userList)
    //const listUsers = () => {}
    return (
        <div className="users">
        {userList.map(user => { 
        return <h4>{user.firstName}</h4>})}   
        </div>
    )
}

export default DB;