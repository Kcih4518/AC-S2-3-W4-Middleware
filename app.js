// Require node_modules
const express = require('express')
const exphdbs = require('express-handlebars')

// Define server info
const PORT = process.env.PORT || 3000

//Setting express
const app = express()

// Setting express-handlebars
app.engine('hbs', exphdbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Setting body-parser
app.use(express.urlencoded({ extended: true }))

// Handle Request & Response
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

// Start and listen on the express server
app.listen(PORT, () => {
  console.log(`Express is listen on http://localhost:${PORT}`)
})
