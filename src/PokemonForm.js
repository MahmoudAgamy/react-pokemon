import React from 'react'

export default class PokemonForm extends React.Component {

  state = {
    name: "",
    url: ""
  }

  handleInput = (event) => {
    this.setState({[event.target.id]: event.target.value}, () => console.log(this.state))
  }

  handleClick = (event) => {
    this.props.submitPokemon(this.state.name, this.state.url)
    this.setState({name: "", url: ""})
  }

  render() {
    console.log(this.props)
    return (
      <div id="pokemon-form">
        <input value={this.state.name} onChange={this.handleInput} id="name" placeholder="Enter Pokemon Name" />
        <input value={this.state.url} onChange={this.handleInput} id="url" placeholder="Enter Pokemon Image Url" />
        <input onClick={this.handleClick} type="submit" />
      </div>
    )
  }

}
