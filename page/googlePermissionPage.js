"use strict";
browser.ignoreSynchronization = true;

var GooglePermissionPage = function() {

	this.setPermissionAccess = function(homeUrl) {
		//check if user needs to approve Google accesses. If so, user allows it.
		browser.sleep(1000);
		browser.getCurrentUrl().then(function(url) {
			if (url != homeUrl)
				browser.driver.findElement(by.id('submit_approve_access')).click();
		});
	};
};
module.exports = new GooglePermissionPage();