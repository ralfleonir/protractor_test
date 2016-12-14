"use strict"
describe('presential classroom page - ', function() {

	var support = require('../support/supportPage.js');
	var home_page = require('../page/homePage.js');
	var presential_class_page = require('../page/presentialClassPage.js');

	it('navigate to presential classroom', function() {
		support.navigateToAcAcademy(browser.params.expectedData.homeUrl);
		home_page.goToPresentialClassroomDetailPage();
	});

	it('check presential class title on class details page', function(done) {
		//expect class details page to have class title
		presential_class_page.getPresentialClassTitle().then(function(value) {
			expect(value).toMatch(/./);
			done();
		});
	});

	it('verify if Overview tab is active by default', function(done) {
		presential_class_page.selectOverviewTab();
		presential_class_page.selectOverviewTab().then(function(value) {
			expect(value).toEqual(browser.params.expectedData.overviewTabText);
			done();
		});
	});

	it('navigate to Contant tab', function(done) {
		presential_class_page.selectContentTab();
		presential_class_page.selectContentTab().then(function(value) {
			expect(value).toMatch(/./);
			done();
		});
	});

	it('navigate to Students tab', function() {
		presential_class_page.selectStudentsTab();
		//add expect to Students tab
	});

	it('select Home breadcrumb link', function() {
		presential_class_page.selectHomeBreadcrumb();
		expect(browser.getCurrentUrl()).toEqual(browser.params.expectedData.homeUrl);
	});

	it('applies to an available course', function() {
		// to do
	});

	it('verify if user is blocked to apply for same class', function() {
		// to do
	});
});
