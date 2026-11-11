require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter' , (req , res)=>{
    res.send('<h1>Welcome to twitter</h1>')
})

app.get('/login' , (req , res)=>{
    res.send('<h2> Welcome to Login Page </h2>')
})

app.get('/youtube' , (req , res)=>{
    res.send('<h2> Welcome to a lesson on backend deployment </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(` App listening on port ${port}`);
});