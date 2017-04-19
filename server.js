var http = require("http");

var PORTa = 7000;
var PORTb = 7500;

var serverA = http.createServer(serverResponseA);
var serverB = http.createServer(serverResponseB);

function serverResponseA(request, response) {
    response.end(goodResponse[RDM(goodResponse.length)] + request.url);
}

function serverResponseB(request, response) {
    response.end(badResponse[RDM(badResponse.length)] + request.url);
}

serverA.listen(PORTa, function() {
    console.log("Server has been started. Listening on http://localhost:%s" + PORTa);
});

serverB.listen(PORTb, function() {
    console.log("Server has been started. Listening on http://localhost:%s" + PORTb);
});

function RDM(max) {
    var newNumber = Math.floor(Math.random() * max);
    return newNumber;
}
var goodResponse = [
    "Hello there, nice to see you ",
    "Good afternoon, hows it going ",
    "Welcome back, good to see you ",
    "Nice to see you agian "
];
var badResponse = [
    "Oh great its you ",
    "UGGGGGGHHH, why ",
    "NONONNNONONONNON ",
    "FINE, I'll help "
];