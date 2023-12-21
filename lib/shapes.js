class Shape {
    constructor(initials, color, bgcolor) {
      this.initials = initials;
      this.color = color;
      this.bgcolor = bgcolor;
    }
}

class Triangle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 40,190 190,190" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}

class Circle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}

class Square extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="30" height="30" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor="middle" fill="${this.color}">${this.initials}</text></svg>`
}
}

// Exports Shape classes
module.exports = { Triangle, Circle, Square };