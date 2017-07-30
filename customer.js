var _ = require("lodash");

var Customer = function(name, cash){
  
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

Customer.prototype = {
  addBookToColl: function(book){
    this.collection.push(book);
  },

  buyBook: function(boughtBook){
    if (boughtBook.price <= this.cash) {
    this.cash -= boughtBook.price;
    this.collection.push(boughtBook);
    }
    else {
      return "Cannot afford book!";
    }
  },

  sellBook: function(soldBook){
    this.cash += soldBook.price;
    var newArray = _.remove(this.collection, function(item) {
      return item === soldBook;
    });
  },

  collValue: function(){
    return _.sumBy(this.collection, function(each){
      return each.price; 
    });
  },

  collGenreTotal: function(genre){
    var newArray = _.filter(this.collection, function(each) {
      return (each.genre === genre); 
    });
    // short-hand sumBy
    return (_.sumBy(newArray, 'price')); 
  },

  longestBook: function(){
    var newArray = _.sortBy(this.collection, [function(each) { 
      return each.pages;
    }]);
    return (newArray.slice(-1)[0]).stringify();
  },

  valueSort: function(){
    var newArray = _.sortBy(this.collection, [function(each) { 
      return each.price;
    }]);
    return newArray.map(function(each){
     return each.stringify();
    })
  },

  compareValues: function(custToCompare){
    if (this.collValue() > custToCompare.collValue()){
      return "Your collection is greater in value. " + custToCompare.name + " Collection Value: £" + custToCompare.collValue();
    }
    else if (this.collValue() < custToCompare.collValue()){
      return "Collection of " + custToCompare.name + " is greater in value. " + custToCompare.name + " Collection Value: £" + custToCompare.collValue();
    }
    else {
      return "Collections of equal value"
    }
  }

}


module.exports = Customer;