const {Shape} = require("./Shape.js");

class Square extends Shape {

    render(){
        return(`<rect width="200" height="200" ${colorValues}/>`);
    }
  }

  module.exports = Square;