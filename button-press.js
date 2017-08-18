const five = require('johnny-five');

class ButtonPress  {

    constructor() {
    }

    init(robot) {
        this.robot = robot;
        let button = new five.Button({
            pin: "A7",
            controller: "TINKERKIT",
            invert: true
        });

        button.on('press', this.press.bind(this));
        button.on('release', this.release.bind(this));
    }
    
    press() {
        this.robot.moveForward();
    }

    release() {
        this.robot.stop();
    }
}

module.exports = ButtonPress;