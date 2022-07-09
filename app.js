const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res, next) => {
  res.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html')
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/notFound.html')
})

app.listen(3000, () => {
  console.log('En directo desde el puerto 3000');
})