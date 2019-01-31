//This variable is going to be an immediately-invoked function expression
// that will return an object.
var budgetController = (function() {
 var x = 23; //this doesnot have access outside variable
 var add = function(a) {
   return x + a;
 }

return {
  publicTest: function(b) {
    return add(b);
  }
}

})();
//These two controllers(budgetController, UIcontroller) don't know about each other. They are stand alone, they
// don't even know that the other one exists.
var UIController = (function() {
//some code

})();

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }

})(budgetController, UIController);

/*
/// uptill here, different modules both with private and public methods and variables.
And we also made them interact with one another. An architecture of our application has
been created.
 */
