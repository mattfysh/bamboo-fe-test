var nc = require('./nocover');

describe('nocover', function() {
	it('now has coverage', function() {
		nc();
		nc.otherfn();		
	})
})
