const {Shape} = require("./Shape.js");

class Circle extends Shape {
   
    render(colorValues){
        return `<circle cx="50" cy="50" r="50" ${colorValues}/>`;
    }
}
module.exports = Circle;