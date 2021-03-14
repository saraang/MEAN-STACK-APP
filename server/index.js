const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
      message:"Home page"
  })
})

app.get('/api', (req, res) => {
    res.json({
        message:"API is working"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})