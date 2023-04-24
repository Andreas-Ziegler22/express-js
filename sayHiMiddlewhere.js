function hello(parameter){
    return function(req, res, next){

        console.log(`HI, Hello ${parameter}`)
        next()
    }
}

module.exports = hello