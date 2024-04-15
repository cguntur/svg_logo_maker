const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    it('should throw an error when the output does not match the Circle class output', () => {
        const shape = new Circle("blue");
        colorValues = shape.setColor();
  
        expect(shape.render(colorValues)).toEqual(`<circle cx="100" cy="100" r="100" ${colorValues}/>`);
    });
});