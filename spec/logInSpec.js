"use strict";
describe('testing log in functionality - ', function() {

	var login_page = require('../page/loginPage.js');
	var home_page = require('../page/homePage.js');
	var google_page = require('../page/googlePermissionPage.js');
	var support_page = require('../support/supportPage.js');

	it('select login button on Home Page', function() {
		home_page.selectLoginButton();
		expect(browser.getCurrentUrl()).toContain(browser.params.expectedData.logInPageUrl);
	});

	it('log in as a registered user', function(done) {
		login_page.fillUserEmail(browser.params.userData.userEmail);
		login_page.clickNextButton();
		login_page.fillUserPassword(browser.params.userData.userPassword);
		login_page.clickSignInButton();
		browser.sleep(2000);
		google_page.setPermissionAccess(browser.params.expectedData.homeUrl);
		//expect user name to be on home page after log in
		home_page.returnUserName().then(function(value) {
			expect(value).toEqual(browser.params.expectedData.userName);
			done();
		});
	});
});