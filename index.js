const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

const htmlDir = __dirname + '/frontend/html/'
const cssDir = __dirname + '/frontend/css/'

app.get('/', (req, res) => {
    res.sendFile(htmlDir + 'index.html')
})

app.get('/css', (req, res) => {
  res.sendFile(cssDir + 'style.css')
})

app.post('/', (req, res) => {
    console.log(req.body.inputText)
  res.redirect('/')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))