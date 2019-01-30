import React from 'react'

const PokemonCard = ({name, url}) => {
  console.log(name)
  return (
    <div className="pokemon-card">
      <h1 className="center-text">{name}</h1>
      <div className="pokemon-image">
        <img alt={name} src={url}/>
      </div>
    </div>
  )
}

export default PokemonCard
