const express = require('express');
const tvController = require('./../controllers/tvcontroller');

const router = express.Router();

router
  .route('/')
  .get(tvController.getAllTv)
  .post(tvController.createTv);

router
  .route('/:id')
  .get(tvController.getTv)
  .patch(tvController.updateTv)
  .delete(tvController.deleteTv);

module.exports = router;
