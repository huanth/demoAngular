class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(5, 5);
console.log(rectangle.getArea());