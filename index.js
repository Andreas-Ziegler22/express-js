const express = require('express')
const app = express()

app.use((req,res)=>{
    // res.json([
    //     {id:01, client: 'John Doe', account: "xxxx-xxxx"},
    //     {id:02, client: 'Martin Tom', account: "yyyyx-xxxx"},
    //     {id:03, client: 'Tiny Doe', account: "zzzzx-xxxx"}
    // ]) <-- here we can see it works as Object


    // res.json({ 
    //     name: 'Macbook Air M1',
    //     price: 1199.00,
    //     discount:0.00

    // }) // <- here we can see it works JSON

    // res.send('show me a ❤️!') // <- here we can see it works with HTML
})

app.listen(3001, ()=>{
    console.log('backend working...!')
})