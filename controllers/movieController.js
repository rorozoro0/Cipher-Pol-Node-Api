const Movie = require('./../models/movies');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      status: 'success',
      results: movies.length,
      data: {
        movies
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    // Movie.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        movie
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createMovie = async (req, res) => {
  try {
    // const newMovie = new Movie({})
    // newMovie.save()
    // console.log(req.body)
    const newMovie = await Movie.create(req.body);
    

    res.status(201).json({
      status: 'success',
      data: {
        movie: newMovie
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    // const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true
    // });
    const movie = await Movie.updateOne(
      { _id: req.params.id },
      { $push: { comments: req.body } },
      {
        new: true
      }
    )
    res.status(201).json({
      status: 'success',
      data: {
        movie: movie
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteMovie = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
