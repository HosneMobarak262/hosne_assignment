let http=require('http');
let fs=require('fs');
let url=require('url');
let port = 3000;

let server = http.createServer(function (req, res){
    let myUrl = url.parse(req.url, true);
    let fileName = "public" + myUrl.pathname;
    console.log("FileName: " + fileName);

    let fileRead = fs.readFile(fileName, function (error, data){
        if(error){
            console.log("404 Not Found.");
            res.end("404 Not Found.");
        } else {
            console.log("File found.");
            res.end("File found.");
        }

        res.end();
    });
});

server.listen(port);
console.log("Server running successfully on port: " + port);