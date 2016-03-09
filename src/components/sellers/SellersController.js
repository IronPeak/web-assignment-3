"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	
	function add(seller) {
		AppResource.addSeller(seller);
	}
	
	function update(seller) {
		AppResource.updateSeller(seller);
	}

});