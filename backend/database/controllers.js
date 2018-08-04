import { addPokemonHelper, fetchAllPokemonHelper, fetchCaughtPokemonHelper, registerCaughtPokemonHelper } from './helpers';

const addPokemon = async (req, res) => {
  const newPokemon = await addPokemonHelper(req.body);
  await res.status(201).send(newPokemon);
}

const fetchAllPokemon = async (req, res) => {
  const allPokemon = await fetchAllPokemonHelper();
  await res.status(200).send(allPokemon);
}

const fetchCaughtPokemon = async (req, res) => {
  const caughtPokemon = await fetchCaughtPokemonHelper();
  await res.status(200).send(caughtPokemon);
}

const registerCaughtPokemon = async (req, res) => {
  const registered = await registerCaughtPokemonHelper(req.body);
  await res.status(201).send(registered);
}

export { addPokemon, fetchAllPokemon, fetchCaughtPokemon, registerCaughtPokemon };