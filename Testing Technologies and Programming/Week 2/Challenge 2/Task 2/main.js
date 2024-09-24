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
   constructor () {
 
      // Initialise Attributes empties
      this._firstName = "";
      this._lastName = "";
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
   hello() {
      console.log("Hello World!");
   }
}

// Create user instance
const user = new User();

// Use setters
user.firstName = "Narcis";
user.lastName = "Girones";

// Use getters
user.hello();
console.log("My name is", user.firstName, user.lastName);