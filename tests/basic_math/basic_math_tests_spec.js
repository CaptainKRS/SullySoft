var add = require("./basic_math.js").add
var subtract = require("./basic_math.js").subtract
describe('Add function', function() {
	xit('was created', function() {
		expect(typeof(add)).toEqual("function")	
	});

	xit('adds two numbers together', function() {
		var result = add(8,8)
		expect(result).toEqual(16)
	});
	xit('adds two different numbers', function() {
		var result = add(6,2)
		expect(result).toEqual(8)
	});
});
describe('Subtract function', function() {
	it('subtracts two numbers', function() {
		var result = subtract(8,3)
		expect(result).toEqual(5)
	});
	it('subtracts two more numbers', function() {
		var result = subtract(7,1)
		expect(result).toEqual(6)
	});
});