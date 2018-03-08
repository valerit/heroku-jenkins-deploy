const express = require('express')
const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_URL

const app = express()

app.get('/', (req, res) => res.json({ status: 'ok' }))

MongoClient.connect(url, (err, client) => {
  if (err) { return console.error(`Could not connect to mongodb, error: ${err}`) }

  console.log('Connected successfully to mongodb')

  app.listen(process.env.PORT || 3000, () => console.log(`App listening on port ${process.env.PORT || 3000}`))

  client.close()
})

module.exports = app
