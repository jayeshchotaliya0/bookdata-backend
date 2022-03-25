const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

pool.connect(function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connection successfully!");
    }
});

module.exports = pool; 