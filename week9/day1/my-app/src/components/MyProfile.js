import React, { Component } from 'react'

export default class MyProfile extends Component {

    state = {
        firstName : "Cameron",
        lastName : "Mills",
        currentCity: "Marietta",
        profilePic : "https://scontent-atl3-1.xx.fbcdn.net/v/t1.18169-9/20728101_10154911152472794_1666749355168340544_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=snzDF7Ji_6sAX-p2LnK&_nc_ht=scontent-atl3-1.xx&oh=c1294aebaf102d7f71c3eeac9ef925c5&oe=6175DB0F"
    }

    changeCity = () => {
        let favCity = "Palm Beach"
        this.setState({currentCity : favCity})
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.currentCity}</p>
                <img src = {this.state.profilePic}></img>
                <button onClick = {this.changeCity}>Change City</button>
            </div>
        )
    }
}
