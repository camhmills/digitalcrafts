import React, { Component } from 'react'

export default class Card extends Component {

    state = {
        flipped : true
    }

    render() {
        const { pokelist } = this.props;
        const { flipped } = this.state;
        const flipSprite = () => {
            this.setState({ flipped : !this.state.flipped})
        }

        console.log(pokelist)
        return (
            <div className="grid">
                {pokelist.map((pokemon) => {
                return <div className="card"> {pokemon.name} {pokemon.id} <img src={flipped ? pokemon.sprites.front : pokemon.sprites.back}></img>
                <button onClick = {flipSprite}>Flip</button>
                </div>
            })}
            </div>

        )
    }
}
