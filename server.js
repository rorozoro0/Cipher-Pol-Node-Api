const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
// const app = express();
const router = express.Router();
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successfull'));
// app.get("/", (req, res)=>{
//   res.json({msg:'wld'});
// })
app.use('/', router);
router
  .route('/')
  .get((req, res)=>{
    res.json({msg:'hello world'});
  })
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
