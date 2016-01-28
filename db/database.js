var mongoose = require('mongoose');



var connectionString = 'mongodb://localhost/machinesofnasa';
if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.MONGOLAB_URI;
}

console.log(connectionString);
mongoose.connect(connectionString);

mongoose.connection.on('connected', function (){
 console.log('connected');
})

mongoose.connection.on('error', function (error){
 console.log(error);
})

mongoose.connection.on('disconnected', function (){
 console.log('disconnected');
})
