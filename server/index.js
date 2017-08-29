import express from 'express'

const port = 3000

const app = express()

app.get('/paragraph', (req, res)=>{
  console.log(req.params)
  res.send('Hello, is winnie the poh! Pdf flavored.')
})

app.post('/paragraph', (req, res)=>{
  console.log(req, 'req')
  res.json(req.params)
  res.send()
})


app.listen(port, ()=>(console.log('Server running on port: ' + port)))
