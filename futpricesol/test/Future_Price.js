
var FuturePrice = artifacts.require("./FuturePrice.sol");

contract('FuturePrice', function(accounts) {
  // Test Case
    // Test Case#1
    it("should assert true", function() {
      var future_price;
      return FuturePrice.deployed().then(function(instance){
        future_price = instance;
        return future_price.getResult.call();
      }).then(function (result) {
        console.log(result.toNumber());
        assert.equal(result.valueOf(), 0, "Contract initialized with value NOT equal to 0!!!");
      });
    });
  
    // Test case#2 
    it("should get expected value", function () {
      // Get the deployed instance
      var future_price;
      
      return FuturePrice.deployed().then(function(instance){
        future_price = instance;
        return future_price.calculatedollar(84508,1200,1)
      }).then(function () {
        return future_price.getResult.call();
      }).then(function (result) {
        console.log(result.toNumber());
        assert.equal(result.toNumber(), 946, "The dollar value should be 946");
    
    });

  });
  
  it("should get expected value", function () {
    // Get the deployed instance
    var future_price;
    
    return FuturePrice.deployed().then(function(instance){
      future_price = instance;
      return future_price.calculatecent(84508,1200,1)
    }).then(function () {
      return future_price.getResult.call();
    }).then(function (result) {
      console.log(result.toNumber());
      assert.equal(result.toNumber(), 489600, "The cents value should be 489600");
  
  });

});

});