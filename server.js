const express = require ('express');
  const server = express ();
  const nunjucks = require ('nunjucks');

  const videos = require ("./data");



  server.use(express.static('public'))
   
  server.set ("view engine","njk")
  nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache:true
})

server.get("/",function(req,res){
    return res.render ("about")
    })

    server.get("/videos", function(req,res){
        const id=req.query.id
        res.send(id)
    })

server.listen (5000,function(){
    console.log ("Hello world!!!")    
   
})

