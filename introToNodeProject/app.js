const figlet = require('figlet');
const prompt = require('prompt');

prompt.start();

prompt.get(['Enter some text'], (err, result) => {
    let enteredText = result['Enter some text']
    figlet(`${enteredText}`, (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })

});

prompt.get(['Enter some text', 'Enter a font: (Standard)'], (err, result) => {
    let enteredText = result['Enter some text']
    figlet(`${enteredText}`, (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })

});