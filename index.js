const inquirer = require('inquirer');
const fs = require('fs');
const fileName = process.argv[2];

const Triangle = require("./lib/Triangle.js");
const Circle = require("./lib/Circle.js");
const Square = require("./lib/Square.js");

const questions = [
    {
        type: 'input',
        message: 'Please enter upto 3 characters for your logo',
        name: 'logo_text',
        validate: (answer) => {
            if (answer.length > 3) {
              return "You can only enter upto 3 characters";
            }
            return true;
          },
    },
    {
        type: 'input',
        message: 'Enter a color for your text',
        name: 'text_color'
    },
    {
        type: 'input',
        message: 'Enter a color for your logo',
        name: 'logo_color'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['Triangle', 'Circle', 'Square'], 
    }
]

function init() {
    inquirer
    .prompt(
        questions
    )
    .then((response) =>
        renderSvg(response)
    )
}

function renderSvg(response){
    console.log(response);

    const renderedShape = shapeEl(response);
    const logoText = textEl(response);

    const svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${renderedShape}${logoText}</svg>`;

    //Save svg to examples folder
    fileNameExt = fileName + '.svg';
    fs.writeFileSync('./examples/' + fileNameExt, svg);
    console.log(svg);
}

function textEl(response){
    const selectedShape = response.shape;

    if(selectedShape == "Triangle"){
        return `<text x="150" y="120" text-anchor="middle" fill="${response.text_color}" font-size="50">${response.logo_text}</text>`;
    }else if(selectedShape == "Circle"){
        return `<text x="100" y="120" text-anchor="middle" fill="${response.text_color}" font-size="70">${response.logo_text}</text>`;
    }else if(selectedShape == "Square"){
        return `<text text-anchor="middle" x="90" y="100" fill="${response.text_color}" font-size="50">${response.logo_text}</text>`;
    }
}

function shapeEl(response){

    const selectedShape = response.shape;

    if(selectedShape == "Triangle"){
        const newShape = new Triangle(response.logo_color);
        colorValues = newShape.setColor();
        return newShape.render(colorValues);
    }else if(selectedShape == "Circle"){
        const newShape = new Circle(response.logo_color);
        colorValues = newShape.setColor();
        return newShape.render(colorValues);
    }else if(selectedShape == "Square"){
        const newShape = new Square(response.logo_color);
        colorValues = newShape.setColor();
        return newShape.render(colorValues);
    }
}
// Function call to initialize app
init();