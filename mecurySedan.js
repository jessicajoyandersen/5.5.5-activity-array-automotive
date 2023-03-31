
const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if((num + this.passengers) > this.maxPassengers){
            console.log("Max capacity exceeded...");
        } else {
            this.passengers += num;
            if(this.passengers = this.maxPassengers){
                console.log("Max capacity reached...");
            };
        };
    };
    start(){
        if(this.fuel > 0){
            console.log("Starting " + this + " ...");
            this.started = true;
        } else {
            console.log(this + " needs to be refueled...");
            this.started = false;
        };
    };
    scheduleService(mileage){
        if(mileage > 30000) {
            this.scheduleService = true;
        };
    };
};

let newCar = new Car("Mercury", "Sedan", "2023", "blue", "180000");
newCar.loadPassenger(6);
newCar.fuel = 20;
newCar.start();
newCar.mileage = 40000;
console.log(newCar);