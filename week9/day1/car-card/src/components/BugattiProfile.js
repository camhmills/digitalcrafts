import React, { Component } from 'react'

export default class BugattiProfile extends Component {

    state = {
        make: "Bugatti",
        model: "La voiture noire",
        engine: "v16",
        horsepower: "1500",
        price: "19000000",
        image: [
          {
            primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
            secondary:
              "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
          },
        ],
        transmission: "7 speed dual clutch",
        topSpeed: [{ US: "261", Metric: "420" }],
    }

    flipImage = () => {
        let imageToFlip = this.state.image[0].secondary
        return imageToFlip
    }

    flipImageBack = () => {
        let imageToFlip = this.state.image[0].primary
        return imageToFlip
    }
    

    render() {
        let imageToFlip = this.state.image[0].primary
        return (
            <div className = "mainContainer">
                <p>{this.state.make}</p>
                <p>{this.state.model}</p>
                <p>{this.state.engine}</p>
                <p>{this.state.horsepower}</p>
                <p>{this.state.price}</p>
                <p>{this.state.transmission}</p>
                <img onMouseOver = {this.flipImage()} onMouseOut = {this.flipImageBack()} className = "buttonImage" src = {imageToFlip}></img>
                <img></img>
                <p>{this.state.topSpeed[0].US}</p>
            </div>
        )
    }
}
