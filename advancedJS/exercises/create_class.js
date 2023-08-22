/*
Exercises for creating class constructor
*/
class Train{
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
        console.log(`%cThe light is ${this.lightsOn ? "on" : "off"} now`, "color: red");
    }
    
    isLightsOn(){
        console.log("Is light on?: " + (this.lightsOn ? "Yes it's on" : "No bro"))
    }
    
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
    
}
//create a new object
var myFirstTrain = new Train('red', false);
myFirstTrain.isLightsOn();
myFirstTrain.toggleLights();
myFirstTrain.isLightsOn();
myFirstTrain.toggleLights();
myFirstTrain.isLightsOn();
myFirstTrain.getSelf();
myFirstTrain.getPrototype();
console.log("---------------------------")
class HighSpeedTrain extends Train{
    constructor(passenger, highSpeedOn,color, lightsOn){
        super(color, lightsOn);
        this.passenger = passenger;
        this.highSpeedOn = highSpeedOn;
    }
    toggleSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High speed status", this.highSpeedOn);
    }
    toggleLights(){
        super.isLightsOn();
        super.toggleLights();
        super.isLightsOn();
        console.log("The speedy train has changed the light now!")
    }
}
var firstHighSpeedTrain = new HighSpeedTrain(200,false,"blue", false);
firstHighSpeedTrain.toggleSpeed();
firstHighSpeedTrain.toggleLights();

