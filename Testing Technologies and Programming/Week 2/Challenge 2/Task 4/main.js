// Coding Task 4 - Polymorphism
/* In order to implement the polymorphism principle, you will create a User class that commits the classes that inherit 
from it to calculate the number of scores that a user has depending on the number of articles that he has authored or edited.

On the basis of the User class, we are going to create the Author and Editor classes, 
and both will calculate the number of scores with the method calcScores(), 
although the calculated value will differ between the two classes.

This is the skeleton for the User class:

Example:

class User {
  constructor() {
    this.numberOfArticles = 0;
  }
}
1. Add to the User class the methods to set and get the number of articles:
setNumberOfArticles(int numberOfArticles)
getNumberOfArticles() 

2. Add to the User class a third method: 
calcScores(), that performs the scores calculations separately for each class.

3. Create an Author class that inherits from the User class. 
In the Author create a calcScores() method that returns the number of scores from the following calculation: 
numberOfArticles * 10 + 20

4. Create an Editor class that inherits from the User class. 
In the Editor create a calcScores() method that returns the number of scores from the following calculation: 
numberOfArticles * 6 + 15

5. Create an object, author, from the Author class, set the number of articles to 8, and print the scores that the author gained.

6. Create another object, editor, from the Editor class, set the number of articles to 15, and print the scores 
that the editor gained.*/

class User {
   constructor() {
      // Initialise Attribute number of Articles with value of "0"
     this._numberOfArticles = 0;
   }

   // Method Set Number of Articles
   set numberOfArticles(numberOfArticles) {
      this._numberOfArticles = numberOfArticles;
   }

   // Method Get Number of Articles
   get numberOfArticles() {
      return this._numberOfArticles;
   }  

   // Methods
   calcScores() {
      throw new Error("Method 'calcScore()' must be implemented in subclasses")
   }
}

// Class Author
class Author extends User {

   // Constructor for Author class, taking a 'number of articles' parameter.
   constructor() {
      // Call the constructor of the user class (User) using super().
      super();
   }

   //Override Method Calculate Scores
   calcScores() {
      return (this.numberOfArticles * 10) + 20;
   }
}

// Class Editor
class Editor extends User {

   // Constructor for Author class, taking a 'number of articles' parameter.
   constructor() {
      // Call the constructor of the user class (User) using super().
      super();
   }

   //Override Methods Calculate Scores
   calcScores() {
      return (this.numberOfArticles * 6) + 15;
   }
}

const author = new Author(); // Create an Author instance
const editor = new Editor(); // Create an Editor instance
author.numberOfArticles(8); // Set number of articles of Author
editor.numberOfArticles(15); // Set number of articles of Editor
console.log("Author's scores:", author.calcScores());
console.log("Editor's scores:", editor.calcScores());

