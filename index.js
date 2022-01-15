var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('This project is has been finished :/ We know this is a not good idea but we should create new things. Come new development server for announcements! https://discord.gg/aZGSy6r4Jx')
})

app.listen(3000)
