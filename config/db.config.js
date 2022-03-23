const Pool = require('pg').Pool

// const dbConn = mysql.createConnection({
//     host : 'localhost',
//     user : "root",
//     password : "root",
//     database : 'nodejs',

// });


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

// pool.connect();

// pool.query(query, (err, response) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Table Users is successfully created');
//     });
    



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