var assert = require('assert');
var Store = require('../store.js');
var Book = require('../book.js');
var Customer = require('../customer.js');

describe("Store", function(){
  var store;
  var book1 = new Book("Jimmy Buchan", "Fash an' a' that", "Self Help", 10, 200, false);
  var book2 = new Book("Graham Broose", "Rowies 1.0", "Cookery", 12, 222, false);
  var book3 = new Book("Marco Greengrass", "Blue Toon Glory", "Sport", 20, 300, false);
  var book4 = new Book("Count Dracula", "My home, Slains Castle", "DIY", 30, 325, true);
  var book5 = new Book("Jimmy Buchan", "Tory Fish", "Horror", 15, 300, true);
  var book6 = new Book("Greg Wood", "The Art of War", "Self Help", 40, 500, false);
  var customer = new Customer("Michael Cameron", 30);


  beforeEach(function(){
    store = new Store("Earthstones", "Peterhead", 1000);
    store.addBook(book1);
    store.addBook(book2);
    store.addBook(book3);
  })


  it('should be able to add a book', function(){
    assert.deepEqual(store.inventory.length, 3);
    store.addBook(book4);
    assert.deepEqual(store.inventory.length, 4);
  });

  it('should be able to list the inventory', function(){
    var actual = ["Author: Jimmy Buchan, Title: Fash an' a' that, Genre: Self Help, Price: £ 10, Length: 200 pages, Controversial: false", "Author: Graham Broose, Title: Rowies 1.0, Genre: Cookery, Price: £ 12, Length: 222 pages, Controversial: false", "Author: Marco Greengrass, Title: Blue Toon Glory, Genre: Sport, Price: £ 20, Length: 300 pages, Controversial: false"]
    assert.deepEqual(store.printInventory(), actual);
  });

  it('should be able to sell a book and adjust the store balance to account for the book being sold', function(){
    store.sellBook(book2);
    assert.deepEqual(store.inventory.length, 2);
    assert.strictEqual(store.balance, 1012);
  });

  it('should be able to report the financial situation of the store - balance and value of inventory', function(){
    var actual = "Balance: £1000, Value of Inventory: £42"
    assert.strictEqual(store.storeFinInfo(), actual);
  });

  it('should be able to view all Books of a given Genre', function(){
    var actual = ["Author: Graham Broose, Title: Rowies 1.0, Genre: Cookery, Price: £ 12, Length: 222 pages, Controversial: false"]
    assert.deepEqual(store.searchByGenre("Cookery"), actual);
  });

  it('should be able to buy books', function(){
    customer.addBookToColl(book6);
    assert.deepEqual(customer.collection.length, 1);
    customer.sellBook(book6);
    store.buyBook(book6);
    assert.deepEqual(store.inventory.length, 4);
    assert.strictEqual(store.balance, 960);
  })





})