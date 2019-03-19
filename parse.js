const chalk = require('chalk');
const data = require('./test.json');
const board = data.scriptData.challenges[0].battle.boards[1];

let result = "";
result += "  A B C D E F G H \n";
for (let i=0; i<8; i++) {
    result += i+1 + " ";
    for (let j=0; j<8; j++) {
        let cur = board[i*8+j];
        if (cur == 0) {
            result += chalk.blue("██");
        } else if (cur == 9) {
            result += chalk.cyan("██");
        } else if (cur > 10) {
            result += chalk.red.bgWhite("🔥");
        } else if (cur == 1) {
            result += chalk.black.bgWhite("5 ");
        } else if (cur == 2) {
            result += chalk.black.bgWhite("4 ");
        } else if (cur == 3 || cur == 4) {
            result += chalk.black.bgWhite("3 ");
        } else if (cur == 5) {
            result += chalk.black.bgWhite("2 ");
        } else {
            result += chalk.black.bgWhite("██");
        }
    }
    result += "\n";
}

console.log(result);
