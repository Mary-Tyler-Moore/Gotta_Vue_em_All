import express from 'express';
import { addPokemon, fetchAllPokemon, fetchCaughtPokemon, registerCaughtPokemon } from '../database/controllers';

const router = express.Router();

router.route('/pokemon')
  .get(fetchAllPokemon)
  .post(addPokemon);

router.route('/caught')
  .get(fetchCaughtPokemon)
  .put(registerCaughtPokemon);

export default router;