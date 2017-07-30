var math = require('./exercise1');
var assert = require('assert');

//All test cases were given 500 ms extra time to return in case of processing power of various machines. 

describe('remoteMathService', function() {
  describe('#remoteMathService()', function() {
    this.timeout(3000);
    it('should compute without error', function(done) {

     math.remoteMathService(function(err, answer) {
      try {
        assert.ok(true);
        assert.equal(answer, 3);
        done();
      } catch (err) {
        done(err);
      }
		});
     	
    });
  });
});

describe('callOneService', function() {
  describe('#callOneService()', function() {
    this.timeout(1500);
    it('Should equal 1', function(done) {

     math.callOneService(function(err, answer) {
      try {
        assert.ok(true);
        assert.equal(answer, 1);
        done();
      } catch (err) {
        done(err);
      }
    });
      
    });
  });
});

describe('callTwoService', function() {
  describe('#callTwoService()', function() {
    this.timeout(2000);
    it('Should equal 2', function(done) {

     math.callTwoService(function(err, answer) {
      try {
        assert.ok(true);
        assert.equal(answer, 2);
        done();
      } catch (err) {
        done(err);
      }
    });
      
    });
  });
});
