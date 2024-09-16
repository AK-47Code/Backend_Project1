require('dotenv').config()
const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 3000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/contacts', (req, res) => {
  const jokes = [
    { id: 1, content: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
]; 
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})