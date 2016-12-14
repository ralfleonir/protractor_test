"use strict";
browser.ignoreSynchronization = true;

var SupportPage = function() {

	this.navigateToAcAcademy = function(home_url) {
		this.currentPage = browser.getCurrentUrl();
		browser.sleep(1000);

		if (this.currentPage != home_url)
			browser.get('http://requiredwebsite');
			// browser.get('http://127.0.0.1:8000/');
	};
};
module.exports = new SupportPage();
