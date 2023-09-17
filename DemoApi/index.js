const express = require(`express`)
const app = express()

app.get(`/`,function(req,res){
    console.log(req)
    res.send(`Hello World this is new`)
})

app.get(`/account`,function(req,res){
    console.log(req)
    res.send(`You have reached account page!`)
})

console.log(`Its runnning...........`)
app.listen(3000)
