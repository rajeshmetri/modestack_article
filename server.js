//job 1 0f 6: Get all the desired technologies
var express = require('express');
const Route = express.Route();
const bodyParser = require('body-parser');
var morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cors = require('cors')
//-----------------------------------------------------------------------
//job 2 of 6: Define the app
const app = express();
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();
   });
app.use(bodyParser.json())

         
//job 3 of 6: Create a web server
const server = app.listen(8080, function () {

   let host = server.address().address
   let port = server.address().port
   winston.info("App listening at localhost:8080");
   console.log("App listening at http://%s:%s", host, port)
})
//-------------------------------------------------------------------------


//job 4 of 6: Establish CORS
const corsOptions = {
   origin: 'http://localhost:4200',
   optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
//---------------------------------------------------------------------------
//job 5 of 6:Configure the database, Model, Data Api
// Database

const dbConfig = require('./app/config/mongodb.config.js');
const User_Articles = require('./app/models/User_Articles.model.js');
const user = require('./app/models/user.model.js');
require('./app/routes/User_Files.routes.js')(app);

//-----------------------------------------------------------------------------
// Job 6 of 6: Connect to the database
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
   .then(() => {
      console.log("Successfully connected to MongoDB.");


   }).catch(err => {
      
      process.exit();
   });




