import React from 'react'

const DataPokemon = ({pokemon}) => {
  return (
    <article className='card'>
        <h2 className='name'>{pokemon?.name}</h2>
        <img className='poke'  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h3 className='type'>Type: {pokemon?.types[0].type.name}</h3>
        
        <ul className='data'>
        <li>Peso: {pokemon?.height}</li>
        <li>Anchura: {pokemon?.weight}</li>
        </ul>
    </article>
  )
}

export default DataPokemon