// Coding Task 2 - Encapsulation
/* Get and Set Methods 

Add the class constructor.
Add the getters and setters methods after the class constructor.
Change your hello() method to return 'Hello World!'.
Add the following:
1. Create an user object called user that will represent the User class.
2. Use the setters methods to set the firstName and lastName instance variables of your user object.
3. Use getters methods to retrieve the firstName and lastName Strings from the user object and add a blank space in between.

Your program output should now look like this:

Hello World!
My name is firstName lastSurname */

class User {
   // Constructor
   constructor (firstName, lastName) {
 
      // Attributes 
      //this._firstName = firstName;
      //this._lastName = lastName;
   }
 
    // Get first name
   get firstName() {
      return this._firstName;
   }
 
   // Get last name
   get lastName() {
      return this._lastName;
   }
 
   // Set first name
   set firstName(firstName) {
      // Set Attribute First Name
      this._firstName = firstName;
   }
 
   // Set last name
   set lastName(lastName) {
      // Set Attribute Last Name
      this._lastName = lastName;
   }
 
   // Method
   hello2() {
      console.log('Hello World!');
   }
}
 
//const user = new User('John', 'Doe');
const user = new User();
user.firstName = 'Narcis';
user.lastName = 'Girones';
user.hello2();
console.log('My name is', user.firstName, user.lastName)