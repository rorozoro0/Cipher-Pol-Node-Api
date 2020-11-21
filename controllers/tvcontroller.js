const Tv = require('./../models/tvShow');

exports.getAllTv = async (req, res) => {
  try {
    const tv = await Tv.find();

    res.status(200).json({
      status: 'success',
      results: tv.length,
      data: {
        random: tv
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
    var tv;
    // Movie.findOne({ _id: req.params.id })

    Tv.findOneRandom(function(err1, element) {
      if (err1)
      {
        console.log(err1);
        console.log("vbhvhasb")
      }
      else
      {
        console.log(element);
        tv = element;
        res.status(200).json({
          status: 'success',
          data: {
            tv
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

exports.getTv = async (req, res) => {
  try {
    const tv = await Tv.findById(req.params.id);
    // Tv.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        tv
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createTv = async (req, res) => {
  try {
    // const newTv = new Tv({})
    // newTv.save()
    const newTv = await Tv.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tv: newTv
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTv = async (req, res) => {
  try {
    const tv = await Tv.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        tv
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateTvComment = async (req, res) => {
  try {
    // const tv = await Tv.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true
    // });
    const tv = await Tv.updateOne(
      { _id: req.params.id },
      { $push: { comments: req.body } },
      {
        new: true
      }
    )
    res.status(201).json({
      status: 'success',
      data: {
        tv: tv
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteTv = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
