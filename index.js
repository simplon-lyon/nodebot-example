const Robot = require('./robot');
const ButtonPress = require('./button-press');
const http = require('http');

let robby = new Robot();

robby.addModule(new ButtonPress());

robby.start();


const server = http.createServer(function(request,response){
    robby.moveForward();
    setTimeout(function(){
        robby.stop();
    },1000);
    response.end('instruction prise en compte');
});

server.listen(8181, function() {
    console.log('listening on 8181');
});
