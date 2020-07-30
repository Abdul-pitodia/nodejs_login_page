 var faker = require('faker');

// console.log(myfaker.internet.email());
// console.log(myfaker.date.past());


// function generateAddress(){
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }

// for(i=1;i<5;i++)
// 	{
// 		generateAddress();
// 	}

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'   // the name of your db
});


// var q = 'SELECT COUNT(*) AS total FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// console.log(end_result.sql);
// connection.end();

var data = [];
for (var i = 1; i < 501; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

// console.log(data);

var q = 'INSERT INTO users (email,created_at) VALUES ?';
connection.query(q,[data],function(err,results){
	if (err) throw err;
	console.log(results);
});

connection.end();

































