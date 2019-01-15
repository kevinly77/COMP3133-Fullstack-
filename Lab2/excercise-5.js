class Car {
    constructor(model,year,balance) {
        this.model = model;
        this.year = year;
        this.balance = balance;
    }

    displayInfo(){
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Balance: ${this.balance}`);
    }
}

class Sedan extends Car {
    constructor(model,year,balance) {
        super(model,year,balance);

    }

    
}

const car2 = new Car('Spaceship', 1976);
car2.displayInfo();