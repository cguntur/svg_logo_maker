const Square = require('../lib/Square.js');

describe('Square', () => {
    it('should throw an error when the output does not match the Square class output', () => {
        const shape = new Square("blue");
        colorValues = shape.setColor();
  
        expect(shape.render(colorValues)).toEqual(`<rect width="200" height="200" ${colorValues}/>`);
    });
});