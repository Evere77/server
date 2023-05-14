const express = require("express");
const app = express();


// middleware
app.use(express.json(), express.urlencoded({extended:true}));


// load .env vars
require('dotenv').config();
// access the .env vars
const PORT = process.env.PORT


// Require / import the file
require("./config/mongoose_config")


// require the routes here to run
const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);


app.listen(PORT, () => console.log(`server up on port ${PORT}`))