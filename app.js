const express = require("express")

const server = express()


const docs = express.static("docs")
server.use(docs)


server.get("/saludo", function(request, response){
    response.end("docs/mercadotech.html")
})

//server.post("Ruta", proceso)


server.listen(80)
