//Shape class and property constructor 
class Shape {
    constructor(initials, color, bgcolor) {
      this.initials = initials;
      this.color = color;
      this.bgcolor = bgcolor;
    }
}

//Triangle class extending the shape class and method to render as a SVG
class Triangle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 0,250 300,250" fill="${this.bgcolor}" /> <text x="145" y="155" font-size="60" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}
//Circle class extending the shape class and method to render as a SVG
class Circle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.bgcolor}" /> <text x="150" y="125" font-size="80" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}
//Square class extending the shape class and method to render as a SVG
class Square extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="200" height="400" fill="${this.bgcolor}" /> <text x="110" y="125" font-size="80" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}

// Exports Shape classes
module.exports = { Triangle, Circle, Square };