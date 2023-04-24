const express = require('express')
const app = express()

app.use((req,res)=>{
    // res.send('show me a ❤️!') // <- here we can see it works with HTML
})

app.listen(3001, ()=>{
    console.log('backend working...!')
})