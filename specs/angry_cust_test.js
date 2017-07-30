// var assert = require('assert');
// var AngryCustomer = require('../angry_customer.js');
// var Customer = require('../customer.js');
// var Book = require('../book.js');

// describe("AngryCustomer", function(){
//   var angryCustomer;
//   var book1 = new Book("Papa John", "Pizza is my Home Boy", "Cookery", 30, 500, true);
//   var book2 = new Book("Chris Burn", "My Two Cents, Vol II", "Crime", 15, 200, false);
//   var book3 = new Book("Kevin Keegan", "I would have loved it (if only I could have beat them)", "Sport", 20, 400, false);

//   beforeEach(function(){
//     angryCustomer = new AngryCustomer("Mary Whitehouse", 500);
//     angryCustomer.addBookToColl(book1);
//     angryCustomer.addBookToColl(book2);
//   })

//   it('should be able to add books', function(){
//     assert.deepEqual(angryCustomer.collection.length, 2);
//     angryCustomer.addBookToColl(book3);
//     assert.deepEqual(angryCustomer.collection.length, 3);
//   });

//   it('should be able to burn controversial books', function(){
//     assert.deepEqual(angryCustomer.collection.length, 2);
//     angryCustomer.burnControversialBooks();
//     assert.deepEqual(angryCustomer.collection.length, 1);
//   });

//   // it('should be able to deface controversial books', function(){
//   //   assert.deepEqual(book1.pages, 500);
//   //   assert.deepEqual(angryCustomer.defaceBooks(book1), MOCK???)
//   // });

//   it('should be able to read books and exclaim of controversial nature', function(){
//     assert.deepEqual(angryCustomer.read(book1), "Oh my days!");
//     assert.deepEqual(angryCustomer.read(book2), "What a fantastic read!");
//   });


// })