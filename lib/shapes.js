class Shape {
    constructor(color) {
        this.color = color;
      }
  
    setColor() {
      console.log(`Color is: ${this.color}`);
    }
}

  class Triangle extends Shape {

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.color}" fill="${this.color}" />`;
    }
  }

  class Circle extends Shape {
    //constructor(color) {
    //    super(color);
    //}
    render(){
        return `<circle cx="50" cy="50" r="50" stroke="${this.color}" fill="${this.color}"/>`;
    }
  }

  class Square extends Shape {
    //constructor(color, shape) {
    //    super(color);
    //}

    render(){
        return(`<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}"/>`);
    }
  }

module.exports = {Circle, Square, Triangle};