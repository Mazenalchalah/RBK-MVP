
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/mvp');
mongoose.connect('mongodb://mazendb:4462097Mm@ds151544.mlab.com:51544/mazendb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('its connect now...............')

});
 
var mySchema  =  mongoose.Schema({
  // TODO: your schema here!
  user_name:String,
  task:String


  
});
var Pro=mongoose.model('Pro', mySchema);

module.exports = Pro;