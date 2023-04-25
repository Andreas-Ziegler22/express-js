const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const hello = require('./sayHiMiddlewhere')

app.use(hello('Parameter'))

app.use((req, res, next)=>{
    console.log('call me before ')
    next()
})

app.get("/clients/query", (req, res) => {
    res.send(
      `Client query: complete = ${req.query.complete} year = ${req.query.year}`
    );
  });
  
  app.get("/clients/:id", (req, res) => {
    res.send(`Client ${req.params.id} selected`);
  });

app.get((req,res)=>{
    console.log('call me during the process')
    res.json({
        data: [
          { id: 01, client: "John Doe", account: "xxxx-xxxx" },
          { id: 02, client: "Martin Tom", account: "yyyyx-xxxx" },
          { id: 03, client: "Tiny Doe", account: "zzzzx-xxxx" },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,
      }); // <- a request with more details 
      next()

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

app.use((req, res)=>{
    console.log('call me after ')
    
})

app.listen(3001, ()=>{
    console.log('backend working...!')
})