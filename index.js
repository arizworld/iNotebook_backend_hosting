require('dotenv').config()
const connectToMongo = require('./db')
const express = require('express')
const authenticationRouter = require('./routes/authentication')
const notesRouter = require('./routes/notes')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors({ origin: "*" }))
app.use(express.json());
// home response
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Available routes
// app.use('base route',route function)
app.use('/api/authentication', authenticationRouter);
app.use('/api/notes', notesRouter);

app.listen(port, async () => {
  await connectToMongo();
  console.log(`Example app listening at http://localhost:${port}`)
})