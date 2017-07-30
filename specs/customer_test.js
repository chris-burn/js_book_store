var assert = require('assert');
var Customer = require('../customer.js');
var Store = require('../store.js');
var Book = require('../book.js');

describe("Customer", function(){
  var customer;
  var store = new Store("We Sell Books", "Ellon", 500);
  var book1 = new Book("Don Corleone", "How to be the Boss", "Self Help", 30, 500, true);
  var book2 = new Book("Chris Burn", "My Two Cents", "DIY", 8, 150, false);
  var book3 = new Book("Andrew Bruce", "Legal History of Banff & Buchan", "History", 60, 900, false);
  var book4 = new Book("Martyn Summers", "Fix your own Ford Sierra", "DIY", 40, 300, false);

  beforeEach(function(){
    customer = new Customer("Sean Jones", 50);
    customer.addBookToColl(book1);
  })

  it('should be able to buy books, adds book to collection, reduces cash', function(){
    assert.deepEqual(customer.collection.length, 1);
    store.addBook(book2);
    assert.deepEqual(store.inventory.length, 1);
    store.sellBook(book2);
    customer.buyBook(book2);
    assert.deepEqual(customer.collection.length, 2);
    assert.strictEqual(customer.cash, 42);
  });

  it('should be able to sell books to store, removes book from collection, increases cash', function(){
    customer.sellBook(book1);
    store.buyBook(book1);
    assert.deepEqual(customer.collection.length, 0);
    assert.strictEqual(customer.cash, 80);
  });

  it('should not be able to buy book if cannot afford it', function(){
    assert.deepEqual(customer.collection.length, 1);
    assert.strictEqual(customer.cash, 50);
    store.addBook(book3);
    store.sellBook(book3);
    assert.strictEqual(customer.buyBook(book3), "Cannot afford book!");
    assert.deepEqual(customer.collection.length, 1);
    assert.strictEqual(customer.cash, 50);
  });

  it('should show value of customer collection', function(){
    customer.addBookToColl(book2);
    assert.deepEqual(customer.collValue(), 38);
  });

  it('should show value of books in collection of a certain genre', function(){
    customer.addBookToColl(book2);
    customer.addBookToColl(book4);
    assert.deepEqual(customer.collGenreTotal("DIY"), 48);
  });

  it('should show the longest book', function(){
    customer.addBookToColl(book2);
    customer.addBookToColl(book3);
    customer.addBookToColl(book4);
    var actual = "Author: Andrew Bruce, Title: Legal History of Banff & Buchan, Genre: History, Price: £ 60, Length: 900 pages, Controversial: false"
    assert.deepEqual(customer.longestBook(), actual);
  });

  it('should sort collection by value (ascending)', function(){
    customer.addBookToColl(book3);
    var actual = ["Author: Don Corleone, Title: How to be the Boss, Genre: Self Help, Price: £ 30, Length: 500 pages, Controversial: true", "Author: Andrew Bruce, Title: Legal History of Banff & Buchan, Genre: History, Price: £ 60, Length: 900 pages, Controversial: false"]
    assert.deepEqual(customer.valueSort(), actual);
  });

  it('should be able to compare two customers collections', function(){
    customer.addBookToColl(book2);
    customer1 = new Customer("Chris Burn", 100);
    customer1.addBookToColl(book3);
    customer1.addBookToColl(book4);
    var actual = "Collection of Chris Burn is greater in value. Chris Burn Collection Value: £100"
    assert.deepEqual(customer.compareValues(customer1), actual);
    var actual1 = "Your collection is greater in value. Sean Jones Collection Value: £38"
    assert.deepEqual(customer1.compareValues(customer), actual1);
  });





})