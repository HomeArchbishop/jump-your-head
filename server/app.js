const express = require('express')
const useragent = require('express-useragent')
const dayjs = require('dayjs')
const { resolve } = require('path')
const fs = require('fs')

const app = express()
const port = 7777

app.use(useragent.express())

app.use((req, res, next) => {
  if (!fs.existsSync(resolve(__dirname, 'logs'))) {
    fs.mkdirSync(resolve(__dirname, 'logs'))
  }
  fs.appendFileSync(resolve(__dirname, `logs/${dayjs().format('YYYY-MM-DD')}.log`), JSON.stringify({
    time: new Date().getTime(),
    ip: req.ip,
    hostname: req.hostname,
    originalUrl: req.originalUrl,
    useragent: req.useragent
  }) + '\n')
  next()
})

app.use(express.static(resolve(__dirname, '../dist')))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
