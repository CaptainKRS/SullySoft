// see the require here? That pulls whatever is exported
// from your file

var hello = require("./hello_world.js")

describe('Hello function', function() {
	it('should say hello', function() {
		expect(hello()).toEqual("Hello")
	});
	it('should say hello to somone if a parameter is supplied', function() {
		result = hello("Jesse")
		expect(result).toEqual("Hello, Jesse")
	});

});
//Don't touch anything in this file.