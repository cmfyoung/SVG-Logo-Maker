const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require("./lib/shapes.js");

inquirer.prompt ([
{
    type: 'input',
    message: 'Please provide the logo letters (up to 3):',
    name: 'initials',
},
{
    type: 'list',
    message: 'Please choose a shape:',
    name: 'shape',
    choices: ['Triangle', 'Circle', 'Square']
},
{
    type: 'input',
    message: 'Please provide the text color name or hexidecimal number: ',
    name: 'text-color',
},    
{
    type: 'input',
    message: 'Please provide the background color name or hexidecimal number: ',
    name: 'background-color',
},    
])

.then ((response) => {
    console.log(response)
})
