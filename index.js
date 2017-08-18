const Robot = require('./robot');
const ButtonPress = require('./button-press');

let robby = new Robot();

robby.addModule(new ButtonPress());

robby.start();

