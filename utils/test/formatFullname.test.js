const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
	it('should return proper string', () => {
		expect(formatFullname('Amanda Doe')).to.equal('Amanda Doe');
		expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
		expect(formatFullname('amANda dOE')).to.equal('Amanda Doe');
		expect(formatFullname('amANda dOE')).to.equal('Amanda Doe');
	});
	it('should return error if no argument', () => {
		expect(formatFullname()).to.equal('Error');
	});
	it('should return error if argument other than string', () => {
		expect(formatFullname(123213)).to.equal('Error');
		expect(formatFullname(null)).to.equal('Error');
		expect(formatFullname({})).to.equal('Error');
		expect(formatFullname(() => {})).to.equal('Error');
		expect(formatFullname([])).to.equal('Error');
	});
	it('should return error if arg is not proper', () => {
		expect(formatFullname('Amanda')).to.equal('Error');
		expect(formatFullname(' Doe')).to.equal('Error');
		expect(formatFullname('   Doe  ')).to.equal('Error');
		expect(formatFullname('Amanda Doe Xxx')).to.equal('Error');
		expect(formatFullname('Amanda Doe Xxx')).to.equal('Error');
	});
});
