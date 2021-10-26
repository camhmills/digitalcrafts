import React, {useState} from 'react'

export default function ListOfNames(props){
    const {list} = props
    return(
        <div>
            <h1>List Of Names</h1>
            <ul> 
                {list?.map(names => {
                return <li>{names}</li>
    })}
            </ul>
        </div>
    )
}