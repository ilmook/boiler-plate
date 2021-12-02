const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

mongoose
  .connect('mongodb+srv://ilmook:123qwe@cluster0.rnqcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})