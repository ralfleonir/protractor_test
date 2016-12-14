"use strict";
var home_page = function() {

	this.login = element(by.css('.ac-login-button'));
	this.userName = element(by.cssContainingText('.ng-binding', 'ACDC User'));
	this.classRoom = element.all(by.css('.ac-bold.ac-black.ng-binding.ng-isolate-scope')).get(0);
	this.logoutButton = element(by.css('[ng-click="vm.logout()"]'));

	this.selectLoginButton = function() {
		this.login.click();
	};

	   this.returnUserName = function() {
		return this.userName.getText();
	};

	this.goToPresentialClassroomDetailPage = function() {
		browser.sleep(1000);
		this.classRoom.click();
	};

	this.logout = function() {
		if (this.valueLogoutButton)
			this.logoutButton.click();
	};
};
module.exports = new home_page();