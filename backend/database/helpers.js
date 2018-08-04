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

const registerCaughtPokemonHelper = ({ pokemonId }) => {
  const register = PokemonCollection.update(
    { pokemonId },
    { $inc: { caught: 1 }},
    { upsert: true }
  )

  return register;
}

export { addPokemonHelper, fetchAllPokemonHelper, fetchCaughtPokemonHelper, registerCaughtPokemonHelper };