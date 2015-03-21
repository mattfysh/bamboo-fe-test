var header = require('./header');

describe('header', function() {

	it('is a function', function() {
		expect(header).to.be.a('function');
	});

	it('returns an element', function() {
		var el = header();
		expect(el).to.match('div#header');
	});

});
