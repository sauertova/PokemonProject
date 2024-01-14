
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [pokemen, setPokemen] = useState([]);

  let getPokemon = async () => {
    try{
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(data);
    return data.results;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const pokemenData = await getPokemon();
      setPokemen((pokemen) => [...pokemenData]);
    })();
  }, []);

  return <>
  <button onClick={() => getPokemon()}>Get Pokemon</button>
  <div>
    {pokemen.map((pokemon, index) => {
      return (
      <div key ={pokemon.name}>
        <h3>Name: {pokemon.name}</h3>
        <p>{pokemon.url}</p>
        </div>
    )
    })}
  </div>
  </>;
}

export default App;
