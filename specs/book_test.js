var assert = require('assert');
var Book = require('../book.js');

describe("Book", function(){
  var book;

  beforeEach(function(){
    book1 = new Book("Jimmy Buchan", "Fash an a that", "Self Help", 10, 200, false);
  })

  it('should be able to print out the book details as a string', function(){
    var actual = "Author: Jimmy Buchan, Title: Fash an a that, Genre: Self Help, Price: £ 10, Length: 200 pages, Controversial: false"
    assert.strictEqual(actual, book1.stringify());
  });


})