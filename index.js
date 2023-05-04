const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
// const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) =>{
  res.send('Chef id runnig')
});

app.get('/categories', (req, res) =>{
  res.send(categories);
})

app.listen(port, () =>{
  console.log(`Chef API is runnig on port: ${port}`)
})