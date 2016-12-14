"use strict";
browser.ignoreSynchronization = true;

var LoginPage = function() {

	this.fillUserEmail = function(emailAddress) {
		browser.driver.findElement(by.id('Email')).sendKeys(emailAddress);
	};

	this.clickNextButton = function() {
		browser.driver.findElement(by.id('next')).click();
	};

	this.fillUserPassword = function(password) {
		browser.sleep(1000);
		browser.driver.findElement(by.id('Passwd')).sendKeys(password);
	};

	this.clickSignInButton = function() {
		browser.driver.findElement(by.id('signIn')).click();
	};
};
module.exports = new LoginPage();