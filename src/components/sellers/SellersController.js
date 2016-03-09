"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	
	function initialize() {
		$scope.seller = {
			name: '',
			category: ''
		};
		
		AppResource.getSellers().success(function(sellers) {
			$scope.sellers = sellers;
		});
	}
	
	$scope.add = function(seller) {
		AppResource.addSeller(seller);
	};
	
	$scope.update = function(id, sell) {
		AppResource.updateSeller(id, sell);
	};
	
	$(document).ready(function(){
		$("#myBtn").click(function(){
			$("#myModal").modal();
		});
	});
	
	initialize();
	
});