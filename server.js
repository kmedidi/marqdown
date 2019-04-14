var express = require('express')
var fs      = require('fs')
var app = express()
var marqdown = require('./marqdown.js');

var args = process.argv.slice(2);
var CMD  = args[0] || "test";

var PORT = args.length == 2? args[1] : 9001;
// var id = Math.floor(Math.random()*1000);

app.get('/', function(req, res) 
{
    // res.send("Hi Marqdown"+id);
    // var text = marqdown.testing("TESTING");
    // var text = marqdown.render( req.body.markdown );
    res.send( {preview: text} );
});

function start() 
{
	return new Promise(function(resolve,reject)
	{
		server = app.listen(PORT, function () {

			var host = server.address().address
			var port = server.address().port

			console.log('Marqdown app listening at http://%s:%s', host, port)
			resolve({host: host, port: port});
		}).on('error', function (err) {
			if(err.errno === 'EADDRINUSE') {
				console.log(`----- Port ${port} is busy, try with another port`);
			} else {
				console.log(err);
			}
		});
	});
}

function stop() 
{
	return server.close();
}

(async () => {
	if( CMD === "start" )
	{
		await start();
	}
})();