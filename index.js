const json_server = require("json-server")

const trip_Server = json_server.create()

// connect with frontend

const cors = require("cors")
trip_Server.use(cors())

// convert json to js

const middleware = json_server.defaults()
trip_Server.use(middleware)

// route to db.json

const router = json_server.router("db.json")

trip_Server.use(router)

// port set

const PORT =8001

trip_Server.listen(PORT,()=>{
    console.log(`PORT RUNNING SUCCESSFULLY ON ${PORT}`);
    
})


