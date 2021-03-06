const express = require('express');
const movieController = require('./../controllers/movieController');

const router = express.Router();

// router.param('id', movieController.checkID);

router
  .route('/')
  .get(movieController.getAllMovies)
  .post(movieController.createMovie);

router
  .route('/random')
  .get(movieController.getRandom);

router
  .route('/comment/:id')
  .patch(movieController.updateMovieComment);
  
router
  .route('/:id')
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

module.exports = router;
