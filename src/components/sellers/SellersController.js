"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	
	function Constructor() {
		$scope.seller = {
			name: '',
			category: ''
		};
		
		$scope.updateScope();
	}
	
	$scope.updateScope = function() {
		AppResource.getSellers().success(function(sellers) {
			$scope.sellers = sellers;
		});
	}
	
	$scope.add = function(seller) {
		AppResource.addSeller(seller);
		$scope.updateScope();
	}
	
	$scope.update = function(seller) {
		AppResource.updateSeller(seller);
		$scope.updateScope();
	}
	
	$(document).ready(function(){
		$("#myBtn").click(function(){
			$("#myModal").modal();
		});
	});
	
	Constructor();
	
});