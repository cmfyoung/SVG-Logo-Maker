const { Circle, Triangle, Square } = require("./shapes");

describe('Circle', () => {
    test('renders', () => {
     let newShape =  new Circle();
     let color = ('orange')
     let bgcolor = ('blue')
      expect(newShape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="125" r="100" fill="${this.bgcolor}" /> <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`);
    });
});
describe('Triangle', () => {
    test('renders', () => {
     let newShape =  new Triangle();
     let color = ('white')
     let bgcolor = ('red')
      expect(newShape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 0,250 300,250" fill="${this.bgcolor}" /> <text x="145" y="155" font-size="60" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`);
    });
});
describe('Square', () => {
    test('renders', () => {
     let newShape =  new Square();
     let color = ('yellow')
     let bgcolor = ('green')
      expect(newShape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="400" fill="${this.bgcolor}" /> <text x="110" y="125" font-size="80" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`);
    });
});