const express = require('express');
const { 
  addPokemon, 
  fetchAllPokemon, 
  fetchCaughtPokemon, 
  registerCaughtPokemon 
} = require('../database/controllers');

const router = express.Router();

router.route('/pokemon')
  .get(fetchAllPokemon)
  .post(addPokemon);

router.route('/caught')
  .get(fetchCaughtPokemon)
  .put(registerCaughtPokemon);

module.exports = router;