const Anime = require('./../models/anime');

exports.getAllAnime = async (req, res) => {
  try {
    const anime = await Anime.find();

    res.status(200).json({
      status: 'success',
      results: anime.length,
      data: {
        anime
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getRandom = async (req, res) => {
  try {
    var anime;
    // Movie.findOne({ _id: req.params.id })

    Anime.findOneRandom(function(err1, element) {
      if (err1)
      {
        console.log(err1);
        console.log("vbhvhasb")
      }
      else
      {
        console.log(element);
        anime = element;
        res.status(200).json({
          status: 'success',
          data: {
            anime
          }
        });
      }
    });

    
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      abc: 'xcfghjkjhg',
      message: err
    });
  }
};

exports.getAnime = async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    // Anime.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        anime
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createAnime = async (req, res) => {
  try {
    // const newAnime = new Anime({})
    // newAnime.save()
    const newAnime = await Anime.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        anime: newAnime
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateAnime = async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        anime
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateAnimeComment = async (req, res) => {
  try {
    // const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true
    // });
    const anime = await Anime.updateOne(
      { _id: req.params.id },
      { $push: { comments: req.body } },
      {
        new: true
      }
    )
    res.status(201).json({
      status: 'success',
      data: {
        anime: anime
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteAnime = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
