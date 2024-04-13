class Shape {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
  
    setColor() {
      console.log(`Color is: ${this.color}`);
    }
}

  class Triangle extends Shape {
    constructor(text, color) {
        super(text, color);
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.color}" fill="${this.color}" />
        <text text-anchor="middle" fill="white" font-size="30">${this.text}</text>`;
        
    }
  }

  class Circle extends Shape {
    constructor(text, color) {
        super(text, color);
    }
    render(){
        return `<circle cx="50" cy="50" r="50" stroke="${this.color}" fill="${this.color}"/>
        <text text-anchor="middle" fill="white" font-size="30">${this.text}</text>`;
    }
  }

  class Square extends Shape {
    constructor(text, color, shape) {
        super(text, color);
    }

    render(){
        return(`<rect x="10" y="10" width="30" height="30" stroke="${this.color}" fill="${this.color}"/>`);
    }
  }

module.exports = {Circle, Square, Triangle};