const express = require('express');
const mangaController = require('./../controllers/mangaController');

const router = express.Router();

router
  .route('/')
  .get(mangaController.getAllManga)
  .post(mangaController.createManga);

router
  .route('/random')
  .get(mangaController.getRandom);

router
  .route('/comment/:id')
  .patch(mangaController.updateMangaComment);

router
  .route('/:id')
  .get(mangaController.getManga)
  .patch(mangaController.updateManga)
  .delete(mangaController.deleteManga);

module.exports = router;
