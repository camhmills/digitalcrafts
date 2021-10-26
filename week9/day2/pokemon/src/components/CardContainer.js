import React, { Component } from 'react'
import Card from './Card'
import "./index.css"

export default class CardContainer extends Component {
    
    render() {

        const { pokedata } = this.props
        console.log(pokedata[0].pokemon[0].name)

        return (
            <div className="card-container">
                <Card pokelist= {pokedata[0].pokemon}/>
            </div>
        )
    }
}
