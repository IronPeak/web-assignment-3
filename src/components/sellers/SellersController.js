"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.

	$scope.seller = {
		name: '',
		category: ''

	};

	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});
	
	$scope.addi = function () {

		console.log($scope.seller);
	};

	function add(seller) {
		AppResource.addSeller(seller);
	}
	
	function update(seller) {
		AppResource.updateSeller(seller);
	}

	$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});


});