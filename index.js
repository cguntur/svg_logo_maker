const inquirer = require('inquirer');
const fs = require('fs');

const {Circle, Square, Triangle} = require("./lib/shapes");

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
        //writeToFile(fileName, response)
        //console.log(response);
        renderShape(response)
    )

}

function renderShape(response){
    console.log(response);
    
    let selectedShape = response.shape;
    console.log("Selected Shape: " + selectedShape);
    if(selectedShape == "Triangle"){
        const newShape = new Triangle(response.logo_text, response.logo_color, response.shape);
        console.log(newShape);
        console.log(newShape.render());
    }else if(selectedShape == "Circle"){
        const newShape = new Circle(response.logo_text, response.logo_color, response.shape);
        console.log(newShape);
        console.log(newShape.render());
    }else if(selectedShape == "Square"){
        const newShape = new Square(response.logo_text, response.logo_color, response.shape);
        console.log(newShape);
        console.log(newShape.render());
    }
}

// Function call to initialize app
init();