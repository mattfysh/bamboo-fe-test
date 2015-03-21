/**
 * This must show up in coverage report despite not being required from any spec
 */

module.exports = function() {
	console.log('foo');
};

exports.otherfn = function() {
	console.log('abc');
};
