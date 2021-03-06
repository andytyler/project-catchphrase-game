const express = require('express')
const reload = require('reload')
const fs = require('fs')
const path = require('path')

const PORT = 8080
const appHTMLPath = path.join(__dirname, 'index.html')
const appHTML = fs.readFileSync(appHTMLPath, 'utf8')

const app = express()

app.get('/', (req, res) => res.send(appHTML))
app.use('/public', express.static('public'))
app.use('/profile', express.static('profile'))
app.use('/signin', express.static('signin'))
reload(app).then( () => {
  app.listen(PORT, (err, ok) => {
    if (err) {
      return console.error('Not working - unable to start server')
    }
    console.log(`Working - Listening on: http://localhost:${PORT}`)
  })
})