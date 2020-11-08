const Manga = require('./../models/manga');

exports.getAllManga = async (req, res) => {
  try {
    const manga = await Manga.find();

    res.status(200).json({
      status: 'success',
      results: manga.length,
      data: {
        manga
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getManga = async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id);
    // Manga.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        manga
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createManga = async (req, res) => {
  try {
    // const newManga = new Manga({})
    // newManga.save()
    const newManga = await Manga.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        manga: newManga
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateManga = async (req, res) => {
  try {
    // const manga = await Manga.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true
    // });
    const manga = await Manga.updateOne(
      { _id: req.params.id },
      { $push: { comments: req.body } },
      {
        new: true
      }
    )
    res.status(201).json({
      status: 'success',
      data: {
        manga: manga
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteManga = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
