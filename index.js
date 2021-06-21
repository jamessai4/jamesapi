require('dotenv').config()
const http=require('http')
const app=require('./app')
const port=process.env.PORT
const server=http.createServer(app)
server.listen(3003,function(){
    console.log("server running rup Port " + 3003)
})