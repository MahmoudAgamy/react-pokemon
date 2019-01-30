import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonContainer = ({pokemon}) => {

  const formatPokemon = () => {
    return pokemon.map((poke, index) => {
      return <PokemonCard key={index} name={poke.name} url={poke.url} />
    })
  }

  return (
    <div id="pokemon-container">
      {formatPokemon()}
    </div>
  )
}

export default PokemonContainer
