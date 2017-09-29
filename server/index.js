import express from 'express'
import bodyParser from 'body-parser'
import paragraph from './api/paragraph'
import path from 'path'
import passport from 'passport'


const port = 3000
const app = express()


app.use(bodyParser.json()) // for parsing application/json


app.get('/paragraph', (req, res)=>{
  res.send('Hello, is winnie the poh! Pdf flavored.')
})


app.get('/api-test', (req, res)=>{
  const {pdfContent} = req.body
  res.send('Hello, is winnie the poh! Pdf flavored.')
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname) + '/client/login.html'))
})

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }));

app.get('/', (req, res) => {
  /* Index JS file */
  res.sendFile(path.join(path.dirname(__dirname) + '/client/index.html'))
})


/* Receive title and text of a paragraph */
app.post('/paragraph', (req, res) => {
  const {title, text} = req.body
  const docName = paragraph(title, text)
  res.send(docName)
})


app.listen(port, () => (console.log('Server running on port: ' + port)))
