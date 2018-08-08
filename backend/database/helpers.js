import { Pokemon, PokemonCollection } from './collections';

const addPokemonHelper = ({ id, name, type, img }) => {
  const newPokemon = new Pokemon({
    id,
    name,
    type,
    img
  })
  return newPokemon.save();
}

const fetchAllPokemonHelper = () => {
  return Pokemon.find({});
}

const fetchCaughtPokemonHelper = () => {
  return PokemonCollection.find({});
}

const registerCaughtPokemonHelper = ({ id, name, type, img }) => {
  const register = PokemonCollection.update(
    { 
      id,
      name,
      type,
      img,
    },
    { $inc: { caught: 1 }},
    { upsert: true }
  )

  return register;
}

export { addPokemonHelper, fetchAllPokemonHelper, fetchCaughtPokemonHelper, registerCaughtPokemonHelper };