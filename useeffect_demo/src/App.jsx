import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [tweet, setTweet] = useState("")
  const [onOff, setOnOff] = useState(false)
  const [pokemonImage, setPokemonImage] = useState("")
  
  useEffect(() => {
    console.log(tweet.length)

  },[onOff, tweet])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/7').then(res => {
      console.log(res.data.sprites.front_default)
      setPokemonImage(res.data.sprites.front_default)
    })
  },[])

  useEffect(() => {
    window.addEventListener('click', () => alert('I AM ROBOT BEEP BEEP'))

    // return () => window.removeEventListener('click')
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's play with the useEffect hook !</h1>
        <input type="text" name="tweeting" value={tweet} onChange={event => setTweet(event.target.value)} />
        <button onClick={() => setOnOff(prev => !prev)}>CLICK MEEE</button>
        {pokemonImage && <img src={pokemonImage} />}
      </header>

    </div>
  );
}

export default App;