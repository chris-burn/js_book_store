// var _ = require("lodash");

// var AngryCustomer = function(name, cash){
//   Customer.call(this);

// };

// AngryCustomer.prototype = {
//   Object.create(Customer.prototype);
//   constructor = Customer;

//   addBookToColl: function(book){
//     this.collection.push(book);
//   },

//   burnControversialBooks: function(){
//     _.remove(this.collection, function(each) {
//       return each.controversial === true;
//     });
//   },

//   defaceBooks: function(book){
//     if (book.controversial === true){
//       var newPages = 0;
//       newPages += _.random(book.pages);
//       return newPages;
//     }
//     else {
//       return "This book is not controversial! In my opinion, of course.";
//     }
//   },

//   read: function(book){
//     if (book.controversial === true){
//       return "Oh my days!"
//     }
//     else {
//       return "This book is not controversial! In my opinion, of course.";
//     }
//   }
  
// }

// module.exports = AngryCustomer;