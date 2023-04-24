# express-js
practicing express

- first npm init -y 
- npm  i express
- and npm i --save-dev nodemon  ( saving as dependencies) and using nodemon to watch any changes

at package.json  we can see 

```
{
  "name": "express",
  "version": "1.0.0",
  "description": "practicing express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```


to be able to play with express I create the file index.js

again at package.json instend of 
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```
I will use

```
"scripts": {
    "start": "nodemon"
  },

```

when I want to run my code I will use the commad:
- npm start 
- npm run start
- nodemon index.js


At professional ambient  developers are using pm2 insted of nodemom.

another tool is postman  to play with GET, POST, PUT, PATCH and DELETE
