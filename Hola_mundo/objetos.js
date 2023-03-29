/**
 * 
 */

 let person= {
	 name: "Cesar",
	 age: 32,
	 isActive: true,
	 hobbies: ["soccer", "volleyball"],
	 toString () {
		 let objectString = this.name + ' ' + this.age;
		 console.log (objectString);
		 }
 }
 
person.toString ();