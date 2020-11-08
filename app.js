const express = require('express');
const morgan = require('morgan');

const movieRouter = require('./routes/movieRoutes');
// const tvRouter = require('./routes/tvRoutes');
// const animeRouter = require('./routes/animeRoutes');
// const mangaRouter = require('./routes/mangaRoutes');

const app = express();

// 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/movies', movieRouter);
// app.use('/api/v1/tv', tvRouter);
// app.use('/api/v1/anime', animeRouter);
// app.use('/api/v1/manga', mangaRouter);

module.exports = app;