"use strict";

angular.module("project3App").controller("SellersDetailsController",
	function SellersDetailsController($scope, AppResource, centrisNotify, $routeParams) {

		$scope.initialize = function() {
		    $scope.id = parseInt($routeParams.id);
			$scope.initalizeSeller();
			$scope.initializeDetails($scope.id);
		};
		
		$scope.initalizeSeller = function() {
	    	$scope.seller = {
	    		id: '-1',
	    		name: 'Loading',
	    		category: 'Loading',
	    		imagePath: 'Loading'
	    	};
	    }; 

		$scope.initializeDetails = function(id) {
			var result = AppResource.getSellerDetails(id);
			if(result !== undefined) {
				result.success(function(s) {
					$scope.seller.id = s.id;
				    $scope.seller.name = s.name;
				    $scope.seller.category = s.category;
				    $scope.seller.imagePath = s.imagePath;
				}).error(function() {
					centrisNotify.error("sellers.Messages.LoadFailedDetails");
				});
			}
		};

		$scope.initialize();

	});