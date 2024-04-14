const {Shape} = require("./Shape.js");

class Triangle extends Shape {
    render(colorValues){
        return `<polygon points="150, 18 244, 182 56, 182" ${colorValues} />`;
    }
}
module.exports = Triangle;