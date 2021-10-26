import React from 'react';
import Exotics from './Exotics';
import Musclecars from './Musclecars';
import '../../App.css'

export default function Cars(props){
    return(
        <div className="box">
            <h1>Cars</h1>
            <Exotics />
            <Musclecars mustang = {props.mustang}/>
        </div>
    )
}