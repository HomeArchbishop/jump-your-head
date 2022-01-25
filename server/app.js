const express = require('express')
const { resolve } = require('path')
const app = express()
const port = 7777

app.use(express.static(resolve(__dirname, '../dist')))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
