import React, { FC } from 'react'

interface Cardprops {
    student:
        { name: string; }  
    
}

const Card:FC<Cardprops> = (props) => {
    return (
        <div>
            {props.student.name}
        </div>
    )
}

export default Card
