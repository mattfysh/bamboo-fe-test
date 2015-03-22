var math = require('./math');

describe('math', function() {

	describe('basics', function() {
		it('adds', function() {
			var r = math.add(1, 2);
			expect(r).to.equal(3);
		});

		it('multiplies', function() {
			var r = math.multiply(5, 2);
			expect(r).to.equal(10);
		});	
	})
	
});
