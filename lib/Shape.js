class Shape {
  constructor(color) {
      this.color = color;
  }

  setColor() {
      console.log(`Color is: ${this.color}`);
      const colorValues =  `stroke="${this.color}" fill="${this.color}"`;
      return colorValues;
  }
}

module.exports = {Shape};