"use strict";
var presential_class_page = function() {

	this.classTitle = element(by.tagName('h4'));
	this.overviewTabText = element(by.cssContainingText('.headline', 'Description'));
	this.contentTab = element(by.linkText('Content'));
	this.contentTabText = element(by.css('.headline.ac-module.ng-binding'));
	this.studentsTab = element(by.linkText('Students'));
	this.homeBreadcrumb = element(by.linkText('Home'));

	// var applyForThisClass = function() {
	// 	return element(by.css('.card.card-detail-bounds'));
	// };

	this.applyForThisClass = element(by.css('[ng-click="applyForCourse()"]'));

	this.appliedToCourse = element(by.css('[ng-show="isEnrolled"]'));
	this.studentsOnClass = element(by.id('students'));

	this.getPresentialClassTitle = function() {
		browser.sleep(1000);
		return this.classTitle.getText();
	};

	this.selectOverviewTab = function() {
		browser.sleep(1000);
		return this.overviewTabText.getText();
	};

	this.selectContentTab = function() {
		this.contentTab.click();
		browser.sleep(1000);
		return this.contentTabText.getText();
	};

	this.selectStudentsTab = function() {
		this.studentsTab.click();
		browser.sleep(1000);
	};

	this.selectHomeBreadcrumb = function() {
		this.homeBreadcrumb.click();
	};

	this.applyForClass = function() {

	};
};
module.exports = new presential_class_page();