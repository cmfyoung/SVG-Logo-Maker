const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes.js");

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
    name: 'color',
},    
{
    type: 'input',
    message: 'Please provide the background color name or hexidecimal number: ',
    name: 'bgcolor',
},    
])

.then ((response) => {
    console.log(response)

let svg;
switch (response.shape) {
    case 'Triangle':
        svg = new Triangle(response);
        break;
    case 'Circle':
        svg = new Circle(response);
        break;
    case 'Square':
        svg = new Square(response);
        break;
}
    
    
return fs.writeFile('logo.svg', svg.render(), (err) => {
    if (err) throw err;
    console.log('Logo generated! Saved as Logo.svg!')
    });
})

