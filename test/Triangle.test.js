const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {
    it('should throw an error when the output does not match the Triangle class output', () => {
        const shape = new Triangle("blue");
        colorValues = shape.setColor();
  
        expect(shape.render(colorValues)).toEqual(`<polygon points="150, 18 244, 182 56, 182" ${colorValues} />`);
    });
});