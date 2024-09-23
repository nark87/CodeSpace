// Coding Task 3
/*Write a function expression called mostExpensiveItem(). 
It should accept an array of items as a single argument. 
It should return the item that has the most cost tied up, 
calculated by the amount in stock * price.

Test Data

[
   { item: "irn bru", price: 3.25, stock: 50 },
   { item: "fanta", price: 3.98, stock: 45 },
   { item: "diet coke", price: 4.40, stock: 38 }, 
   { item: "7up", price: 3.99, stock: 42 }, 
]
Output

{ item: 'fanta', price: 3.98, stock: 45 } */

var itemArray = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 },
 ]; // Initialise the array
 
 let mostExpensiveItem = (arr) => {
    
    var mostIndexItem = 0; // Initialize the auxiliar position to find the most expensive item (price * stock)
    var mostValueItem = 0; // Initialize the value of the most expensive item (price * stock)
    var auxMost = 0; // Initialize the auxiliar value inside the loop (price * stock)
    var i = 0; // Initialize the index for the loop
 
    for (var row of arr) { // Read the rows of the 2 dimensional array
       auxMost = row.price * row.stock; // Multiple the 2 parameters (price * stock) for the row
 
       if (mostValueItem < auxMost){ // Compare results with the one before, pass if the new one value is higher than before
          mostValueItem = auxMost; // New value. It is the old one value for the next loop
          mostIndexItem = i; // New index. It is now the old one index for the next loop
       }
       i++; // Increase the index for the loop
    }
    console.log(arr[mostIndexItem]);
 }
 mostExpensiveItem(itemArray);