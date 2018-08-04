import mongoose from 'mongoose';
import db from './index';

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  img: String,
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const pokemonCollectionSchema = new mongoose.Schema({
  pokemonId: Number,    //an object that contains key (pokemon ID) and value (# caught)
  caught: Number
})

const PokemonCollection = mongoose.model('pokemoncollection', pokemonCollectionSchema);

export { Pokemon, PokemonCollection };