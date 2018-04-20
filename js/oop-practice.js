/*eslint-env browser*/
//step 1 

//constructor syntax
//function Cat() {
//    };



//anonymous declaration

//var Dog = function() {
//    };

//step 2 

//var bengal = new Cat();
//var huskey = new Dog();

//step 3 

//function Animal() {
//    "use strict";
//    window.console.log("The Animal has been created!");
//};
//var dog = new Animal();

//Step 4 

//function Animal(kind) {
//    "use strict";
//    this.kind = kind;
//    window.console.log("The " + this.kind + " has been created!");
//}
//var dog = new Animal("bark bark");

//Step 5 

//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//    window.console.log("My new pet is a " + this.color + " " + this.breed + " " + this.type + " that is " + this.height + " tall and " + this.length + " long.");
//};
//var newPet = new Animal("dog", "Huskey", "grey", "26 inches", "40 inches");

//Step 6 

//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//};
//var newPet = new Animal();
//for (var property in newPet) {
//    window.console.log(property);
//};

//STEP 7

//Animal.prototype.speak = function () {
//    "use strict";
//    if (this.type === "dog") {
//        return "The " + this.color + " dog is barking!";
//    } else if (this.type === "cat") {
//        return "The " + this.color + " cat is meowing!";
//    } else {
//        return "I have no idea what the animal " + this.type + " is.";
//    }
//}
//window.console.log(myAnimal.speak());

//STEP 8

//function Animal(type, breed, color, height, length_value) {
//    "use strict";
//    var type = type;
//    var breed = breed;
//    var color = color;
//    var height = height;
//    var length_value = length_value;
//    var checkType = function () {
//        if (type === "dog") {
//            return "dog";
//        } else if (type === "cat") {
//            return "cat";
//        } else {
//            return type;
//        }
//    };
//    this.speak = function () {
//        window.console.log("The " + checkType() + " has made a noise!");
//    }
//}
//
//var myAnimal1 = new Animal("cat", "bengal", "pwhite", 25, 30);
//window.console.log(myAnimal1.speak());

