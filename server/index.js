import express from 'express'
import bodyParser from 'body-parser'
import paragraph from './api/paragraph'
import path from 'path'

const port = 3000
const app = express()


app.use(bodyParser.json()) // for parsing application/json


app.get('/paragraph', (req, res)=>{
  console.log(req.params)
  res.send('Hello, is winnie the poh! Pdf flavored.')
})

app.get('/paragraph', (req, res)=>{
  console.log(req.params)
  res.send('Hello, is winnie the poh! Pdf flavored.')
})

app.get('/*', (req, res)=>{
  res.sendFile('')
})


/* Receive title and text of a paragraph */
app.post('/paragraph', (req, res)=>{
  const {title, text} = req.body
  const docName = paragraph(title, text)
  res.send(docName)
})


app.listen(port, ()=>(console.log('Server running on port: ' + port)))
