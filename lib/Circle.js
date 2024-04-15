const {Shape} = require("./Shape.js");

class Circle extends Shape {
   
    render(colorValues){
        return `<circle cx="100" cy="100" r="100" ${colorValues}/>`;
    }
}
module.exports = Circle;