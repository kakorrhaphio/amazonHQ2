// var bcrypt   = require('bcrypt-nodejs');
// var oracle = require('oracledb');
// // define the schema for our user model
// var userSchema = oracle.Schema( {
//     local           :{
//         username    : String,
//         password    : String
//     }
// });


// // methods ======================
// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// // create the model for users and expose it to our app
// // module.exports = mongoose.model('User', userSchema);
// module.exports = oracle.model('User', userSchema);