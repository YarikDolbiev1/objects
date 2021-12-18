function Dog(name,breed,weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speed = 0;
    this.bark = function () {
        if (weight >=25){
            alert("сказал Гав");
        }
        else
        alert("сказал Тяф")
       
        
    };
    this.start = function () {
        this.speed = 1;

    };
    this.stop = function () {
        this.speed = 0;   
    }
    this.changeSpeed = function (amount) {
        this.speed *=amount;
    };
    this.showSpeed = function () {
      alert(this.speed);  
    };
}
let fido = new Dog("Fido", "Mixed", 38);
let vasya = new Dog("Vasya", "Mixed", 15);
let fluffy = new Dog("Fluffy", "Mixed", 13);

let dogs = [fido,fluffy,vasya];
for (let i = 0; i < dogs.length; i++) {
    alert(dogs[i].name);
    dogs[i].bark();
    dogs[i].start();
    dogs[i].changeSpeed(2);
    dogs[i].showSpeed();

    
}
