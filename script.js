//complete this code
class Animal {
	 constructor(species){
		   this.species = species;
	 }

	 getSpecies(){
		  return this.species;
	 }

	 void makeSound(){
		   console.log(`The ${this.species} makes a sound`);
	 }
}

class Dog extends Animal {
	 constructor(sp){
		 super(sp);	 
	 }
	
	 void bark(){
		    console.log("woof");
	 }
}

class Cat extends Animal {
	 constructor(sp){
		 super(sp);	 
	 }
	 void purr(){
		  console.log("purr");
	 }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
