const connectToMongo = require('./db')
const express = require('express')
const authenticationRouter = require('./routes/authentication')
const notesRouter = require('./routes/notes')
const cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());
// home response
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Available routes
// app.use('base route',route function)
app.use('/api/authentication',authenticationRouter);
app.use('/api/notes',notesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})