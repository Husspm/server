var http = require("http");

var PORT = 8080;

var server = http.createServer(serverResponse);

function serverResponse(request, response) {
    response.end("Connected path hit :" + request.url);
}


server.listen(PORT, function() {
    console.log("Server has been started. Listening on http://localhost:" + PORT);
});