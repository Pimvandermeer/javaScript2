// var express = require('express')
//   , app = express()
//   , http = require('http')
//   , server = http.createServer(app)
//   , io = require('sockit.io').listen(server);
//
// app.use(express.static(__dirname + '/public'));
// app.get('/', function (req, res){
//   res.sendfile(__dirname + '/public/index.html');
// });
//
// app.get('/', function (reques, response){
//   respone.redirect('default.html');
// });
let a = 5;
let b = 6;
let c = a + b;
console.log(c);

// var mkdirp = require('mkdirp');
// for (i = 0; i < 10; i++) {
//     mkdirp(`./public/${i}`, function(err) {
//       if (err) console.error(err);
//       else console.log('pow!')
//     });
// }

// var rimraf = require("rimraf");
// for (i = 1; i < 10; i++) {
//     rimraf(`./public/${i}/`, function () { console.log("done"); });
// }
const dns = require('dns');

dns.lookup('iana.org', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
dns.getServers();
