"use strict"
describe('testing "required" web site - ', function() {

	var support = require('../support/supportPage.js');

	it('access "required" web site', function() {
		support.navigateToAcAcademy(browser.params.expectedData.homeUrl);
		expect(browser.getCurrentUrl()).toEqual(browser.params.expectedData.homeUrl);
	});
});
