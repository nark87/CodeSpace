// Coding Task 5 - Abstraction
/* In this task , we will create an abstract User class and two child classes (Admin and Viewer classes) that inherit from the abstract class.

1. Create an abstract class with the name of User: 
Add to the class, a property with the name of username. 
Add to the class, an abstract method with the name of stateYourRole().
Add to the class, the setter and getter methods to set and get the username.

2. Create an Admin class that inherits the User abstract class: 
Add to the class a method stateYourRole() and let it return the string "admin".

3. Create another class, Viewer that inherits the User abstract class: 
Add to the class a method stateYourRole() and let it return the string "viewer".

4. Create an object, admin, from the Admin class, set the username to "Balthazar", and make it return the string "admin".
5. Create an object, viewer, from the Viewer class, set the username to "Melchior", and make it return the string "viewer". */

// Abstract class representing a generic User
class User {
   // Constructor with username initialisation and abstract instance check
   constructor() {
     // Check if an attempt is made to instantiate the abstract class directly
     if (this.constructor === User) {
       throw new TypeError("Cannot construct Abstract instances directly.");
     }
   }

   // Abstract method Set username
   set userName(userName) {
      // Throw an error if the abstract method is called directly from a child class
      throw new TypeError("Do not call abstract method set userNzme from child.");
   }

   // Abstract method Get username
   get userName() {
      // Throw an error if the abstract method is called directly from a child class
      throw new TypeError("Do not call abstract method get userNzme from child.");
   }  
 
   // Abstract method for state your role
   stateYourRole() {
     // Throw an error if the abstract method is called directly from a child class
     throw new TypeError("Do not call abstract method stateYourRole() from child.");
   }
 }

 class Admin extends User {
   // Constructor with username initialisation
   constructor() {
      // Call the parent class constructor
      super();
      // Initialise the username
      this._userName = "";
   }

   // Override abstract method Set username
   set userName(userName) {
      // Set Attribute username
      this._userName = userName;
   }

   // Override abstract method Get username
   get userName() {
      // Return username
      return this._userName;
   }  

   // Override method state tour role
   stateYourRole() {
      // Return this string
      return "admin";
   }
 }

 class Viewer extends User {
   // Constructor with username initialisation
   constructor() {
      // Call the parent class constructor
      super();
      // Initialise the username
      this._userName = "";
   }

   // Override abstract method Set username
   set userName(userName) {
      // Initialise the username
      this._userName = userName;
   }

   // Override abstract method Get username
   get userName() {
      // Return username
      return this._userName;
   } 

   // Override method state tour role
   stateYourRole() {
      // Return this string
      return "viewer";
   }
 }

 const admin = new Admin(); // Create Admin instance
 admin.userName = "Balthazar"; // Set username
 console.log("User name",admin.userName,"is an", admin.stateYourRole());

 const viewer = new Viewer(); // Create Admin instance
 viewer.userName = "Melchior"; // Set username
 console.log("User name",viewer.userName,"is a", viewer.stateYourRole());