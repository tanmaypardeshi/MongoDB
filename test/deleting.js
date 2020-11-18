const assert = require('assert');
const MarioChar = require('../models/mariochar');
// Describe tests

describe('Deleting records', function() {
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
    it('Delete a record from the database', function(done) {
        MarioChar.findOneAndRemove({name: 'Mario'})
        .then(() => {
            MarioChar.findOne({name:'Mario'})
            .then((result) => {
                assert(result === null);
                done();
            });
        });
    });
})