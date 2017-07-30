var _ = require("lodash");

var Book = function(author, title, genre, price, pages, controversial){

  this.author = author;
  this.title = title;
  this.genre = genre;
  this.price = price;
  this.pages = pages;
  this.controversial = controversial;
}

Book.prototype = {
  stringify: function(){
    return "Author: " + this.author + ", Title: " + this.title + ", Genre: " + this.genre + ", Price: £ " + this.price + ", Length: " + this.pages + " pages, Controversial: " + this.controversial; 
  },

  






}


module.exports = Book;