// Coding Task 3 - Inheritance (Subclass and Superclass)
/* In this task your are required to create an Admin class, which is a  child class of the User  class:

1. Create a  User class:
§ Add to the class a property with the name of username.

§ Create a setter method that can set the value of the username.


2. Create the Admin class that inherits the User class:
§ Add a method by the name of expressYourRole(), and make it return the string: "Admin".

§ Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.


3. Create an object admin out of the class Admin:
§ Set its name to "Balthazar" and say hello to the user. */

// Define a class named Animal

class User {
   // Constructor for User class, takes 'username' as a parameter
   constructor() {

   }
   get userName() {
      return this._userName;
   }
   set userName(userName) {
      // Set Attribute Username
      this._userName = userName;
   }
 }
 
 // Define a class named Dog that extends Animal
 class Admin extends User {

   // Methods
   expressYourRole() {
      return "Admin";
   }
   sayHello() {
      console.log(`Hello admin, ${this.userName}`);
   }
 }

const admin = new Admin();
admin.userName = "Balthazar";
admin.sayHello();