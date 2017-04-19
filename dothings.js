var http = require("http");
var url = require("url");

var PORT = 8080;

var server = http.createServer(serverResponse);

function serverResponse(request, response) {
    var urlParts = url.parse(request.url);
    switch (urlParts.pathname) {
        case "/":
        case "/home":
            response.end("<h1>Connected path hit <a href='/portfolio'>Go to portfolio</a></h1>");
            break;
        case "/portfolio":
            response.end("<h1>Connected path hit <a href='/home'>Go to home</a></h1>");
            break;
        default:
            response.end("Connected path hit :" + request.url);
    }
}


server.listen(PORT, function() {
    console.log("Server has been started. Listening on http://localhost:" + PORT);
});