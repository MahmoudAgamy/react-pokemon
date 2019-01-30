//libraries
import React, { Component } from 'react';

//components
import PokemonForm from './PokemonForm'
import PokemonContainer from './PokemonContainer.js'

//images
import logo from './pokemon.png'

//css
import './App.css';

export default class App extends Component {

  state = {
    pokemon: []
  }

  handleSubmit = (name, url) => {
    this.setState(prevState => {
      return {
        pokemon: [...prevState.pokemon, {name, url}]
    }
  })
}

  render() {
    return (
      <div id="app-container">
        <img id="pokemon-logo" src={logo} alt=""/>
        <PokemonForm submitPokemon={this.handleSubmit} />
        <PokemonContainer pokemon={this.state.pokemon} />
      </div>
    );
  }
}
