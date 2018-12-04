const chalk = require('chalk');

const helloBlue = () => console.log(chalk.blue('Hello World'));
const helloRed = () => console.log(chalk.red('Hello World'));
const stringToColor = (str, color) => console.log(`${chalk.color(str)}`);

const evensBlueOddsYellow = (str) => {
    let strArr = str.split(' ');

    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            console.log(chalk.blue(strArr[i]));
        } else if (i % 2 === 1){
            console.log(chalk.yellow(strArr[i]));
        }
    }
}

const angryText = (str) => console.log(chalk.red.underline.bold(str.toUpperCase()));
const backgroundCyan = (str) => console.log(chalk.white.bgCyan(str));

const boldFirstUnderlineLast = (str) => {
    let strArr = str.split(' ');
    let outputStrArr = []
    
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            outputStrArr.push(`${chalk.bold(strArr[i])}`);
        } else if (i === strArr.length - 1) {
            outputStrArr.push(`${chalk.underline(strArr[i])}`); 
        } else {
            outputStrArr.push(strArr[i]);
        }
    }
    return console.log(outputStrArr.join(' '));
};

const commandlineChalk = (args) => {
    console.log(chalk.cyan.underline.bold(args.join(' ')));
} 





