import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import DataPokemon from './components/DataPokemon'

function App() {

  const [pokemon, setPokemon] = useState()
  const [inputValue, setInputValue] = useState()
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setPokemon(res.data)  
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)  
      })
      .finally(() => {
      // setTimeout(() => setIsLoading(false), 2000)
      setIsLoading(false)
    })
        
  }, [inputValue])

  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(e.target.namePoke.value)
  }

  console.log(pokemon)
  
  return (
    <div className="App">
      <h1 className='tittle'>PokeApi</h1>

      <form onSubmit={handleSubmit}>
        <input id='namePoke' type="text" />
        <button>Search</button>
      </form>
    {
      isLoading ?
      <h1>Loading...</h1>
      :
        hasError ?
          <h1>Pokémon not found</h1>
        :
          <DataPokemon pokemon={pokemon}/>
    }
    </div>
  )
}

export default App
