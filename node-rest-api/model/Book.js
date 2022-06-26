const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'books'
})
Book.index( { name: 'text' } );
module.exports = mongoose.model('Book', Book)