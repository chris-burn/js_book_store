var _ = require("lodash");

var Store = function(name, city, balance){

  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype = {
  addBook: function(book){
    this.inventory.push(book);
  },

  printInventory: function(){
    var newArray = this.inventory.map(function(each){
     return each.stringify();
    });
    return newArray;
  },

  sellBook: function(book){
    var newArray = _.remove(this.inventory, function(item) {
      return item === book;
    });
    this.balance += book.price;
  },

  storeFinInfo: function(){
     var invValue = _.sumBy(this.inventory, function(each){
      return each.price; 
    });
    return 'Balance: £' + this.balance + ', Value of Inventory: £' + invValue;
  },

  searchByGenre: function(type){
    var newArray = _.filter(this.inventory, function(each) {
     return (each.genre === type); 
    });
    return newArray.map(function(each){
      return each.stringify();
    });
  },

  buyBook: function(boughtBook){
    this.inventory.push(boughtBook);
    this.balance -= boughtBook.price;
  }



}

module.exports = Store;