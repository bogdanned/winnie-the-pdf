import express from 'express'
import bodyParser from 'body-parser'


const port = 3000

const app = express()

app.use(bodyParser.json()); // for parsing application/json

app.get('/paragraph', (req, res)=>{
  console.log(req.params)
  res.send('Hello, is winnie the poh! Pdf flavored.')
})

/* Receive title and text of a paragraph */
app.post('/paragraph', (req, res)=>{
  const {title, text} = req.body

  res.json(req.params)
  res.send()
})


app.listen(port, ()=>(console.log('Server running on port: ' + port)))
