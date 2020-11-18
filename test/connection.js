const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

before(function(done) {
    mongoose
    .connect('mongodb://localhost/test')
    .then(() => {
        console.log("Connection has been made...");
        done();
    })
    .catch((err) => 
        console.log(err)
    );
});

beforeEach(function(done) {
    mongoose.connection.collections.mariochars.drop(function() {
        done();
    });
})