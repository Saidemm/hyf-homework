class Circle {

    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getCircumference() {
        return this.radius * 2 * Math.PI;
    }
    getArea() {
        return this.radius * this.radius * Math.PI; 
    }
    
}

const circleOne = new Circle(20);
console.log(circleOne.getDiameter());
console.log(circleOne.getCircumference());
console.log(circleOne.getArea());

const circleTwo = new Circle(2);
console.log(circleTwo.getDiameter());
console.log(circleTwo.getCircumference());
console.log(circleTwo.getArea());
