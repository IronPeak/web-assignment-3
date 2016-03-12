"use strict";

angular.module("project3App").controller("SellersDetailsController",
	function SellersDetailsController($scope, AppResource, SellerDlg, centrisNotify, $routeParams) {

		$scope.id = parseInt($routeParams.id);

		$scope.sellerName = '';
		$scope.sellerCategory = '';
		$scope.sellerImg = '';
		initializeDetails();

		function initializeDetails() {
			var result = AppResource.getSellerDetails($scope.id);
			if(result !== undefined) {
				result.success(function(s) {
				$scope.sellerName = s.name;
				$scope.sellerCategory = s.category;
				$scope.sellerImg = s.imagePath;
				//Toastr ??
				}).error(function() {
					centrisNotify.error("sellers.Messages.LoadFailedDetails");
				});
			}
		}



			
	

	});