class Shape {
    constructor(initials, color, bgcolor) {
      this.initials = initials;
      this.color = color;
      this.bgcolor = bgcolor;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="100,10 40,190 190,190" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor"middle" fill="${this.color}"></text>`
}
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor"middle" fill="${this.color}"></text>`
}
}

class Square extends Shape {
    render () {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.bgcolor}" /> <text x="100" y="75" font-size="40" text-anchor"middle" fill="${this.color}"></text>`
}
}

// Exports Shape classes
module.exports = { Triangle, Circle, Square };