const express       = require('express');
const bodyParser    = require('body-parser');
var cors = require('cors');

// express app
const app = express();

//setup server code
const port = process.env.PORT || 5000;

// inser data in database
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//define root router server
app.get('/',(req,res)=>{
    res.send('dgj');
});

const User_Route  =  require('./src/routes/emp_routes'); 

//create user route
app.use('/api/v1/register',User_Route);

app.listen(port , ()=>{
    console.log(`port is ${port}`);
})


