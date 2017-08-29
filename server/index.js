import express from 'express'

const port = 3000

const app = express()


app.use('/', (req, res)=>{
  res.send('Hello, is winnie the poh!')
})


app.listen(port, ()=>(console.log('Server running on port: ' + port)))
