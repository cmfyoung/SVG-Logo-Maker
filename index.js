//fs and inquirer dependencies  
const fs = require('fs');
const inquirer = require('inquirer');
//Imported classes from shapes.js
const { Circle, Triangle, Square } = require("./lib/shapes.js");

//User Prompt 
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
//User response after input 
.then ((response) => {
    console.log(response)

//Creating the shapes using switch statement and case clauses
let svg;
switch (response.shape) {
    case 'Triangle':
        svg = new Triangle(response.initials, response.color, response.bgcolor);
        break;
    case 'Circle':
        svg = new Circle(response.initials, response.color, response.bgcolor);
        break;
    case 'Square':
        svg = new Square(response.initials, response.color, response.bgcolor);
        break;
}

//Writing the newly generated SVG to a file
    
return fs.writeFile('logo.svg', svg.render(), (err) => {
    if (err) throw err;
    console.log('Logo generated! Saved as Logo.svg!')
    });
})

