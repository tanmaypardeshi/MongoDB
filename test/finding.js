const assert = require('assert');
const MarioChar = require('../models/mariochar');
// Describe tests

describe('Finding records', function() {
    let char;
    beforeEach(function(done) {
            char = new MarioChar({
            name: 'Mario'
        });
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });
    // Create tests
    it('Finds a record from the database', function(done) {
        MarioChar.findOne({name: 'Mario'})
        .then((result) => {
            assert(result.name === 'Mario');
            done();
        })
    });

    it('Finds a record from the database by ID', function(done) {
        MarioChar.findOne({_id: char._id})
        .then((result) => {
            assert(result._id.toString() === char._id.toString());
            done();
        })
    });
})