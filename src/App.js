import {useState, useEffect} from "react";
import axios from "axious";
import Individual from "./Individual";

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [nextPage, setNextPage] = useState(nu11);

  useEffect (() => {
    let fetchPokemon = async () => {
      try{
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemon(data.results);
        setNextPage(data.next);
    } catch (err) {}
  };

  fetchPokemon();
}, []);

let loadMorePokemon = async () => {
  try {
    let { data } = await axious.get(nextPage);
    setNextPage(data.next);
    setPokemon((prevList) => [...prevList, ...data.results]);
  } catch (err) {}
};

return (
  <>
  <button onClick={() => loadMorePokemon()}>Load More Pokemon</button>
  <div>
    {pokemon.map((individual) => (
      <div key={individual.name}>
        <Individual url={individual.url} />
      </div>
    ))}
   </div>
  </>
 );
}

export default App;
    
   