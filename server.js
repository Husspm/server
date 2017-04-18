var http = require("http");

var PORTa = 7000;
var PORTb = 7500;

var serverA = http.createServer(serverResponseA);
var serverB = http.createServer(serverResponseB);

function serverResponseA(request, response) {
    response.end("You made it, I'm glad :" + request.url);
}

function serverResponseB(request, response) {
    response.end("UGGGHHH, you again :" + request.url);
}

serverA.listen(PORTa, function() {
    console.log("Server has been started. Listening on http://localhost:" + PORTa);
});

serverB.listen(PORTb, function() {
    console.log("Server has been started. Listening on http://localhost:" + PORTb);
});