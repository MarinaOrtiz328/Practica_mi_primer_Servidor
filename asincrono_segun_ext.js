const http= require('http');
const fs= require('fs');

//http => (request, response)
//const data= fs.readFileSync('./WWW/file.txt');

http.createServer((request, response)=>{
  console.log(request.url);
  const file = request.url=='/'? './myfile.txt': `.${request.url}`;
  fs.readFile(file, (err,data)=>{
    if(err){
      response.writeHead(404, {"Content.Type": "text/plain"});
      response.write("not found");
      response.end();
    }else{
      response.writeHead(200, {"Content.Type": "text/plain"});
      response.write(data);
      response.end();
    }
  });
}).listen(4444);
