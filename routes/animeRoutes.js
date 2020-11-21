const express = require('express');
const animeController = require('./../controllers/animeController');

const router = express.Router();

router
  .route('/')
  .get(animeController.getAllAnime)
  .post(animeController.createAnime);

router
  .route('/random')
  .get(animeController.getRandom);

router
  .route('/comment/:id')
  .patch(animeController.updateAnimeComment);

router
  .route('/:id')
  .get(animeController.getAnime)
  .patch(animeController.updateAnime)
  .delete(animeController.deleteAnime);

module.exports = router;
