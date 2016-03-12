"use strict";

angular.module("project3App").controller("SellersDetailsController",
	function SellersDetailsController($scope, AppResource, SellerDlg, centrisNotify, $routeParams) {

		$scope.id = parseInt($routeParams.id);

		$scope.sellerName = '';
		$scope.sellerCategory = '';
		$scope.sellerImg = '';

		$scope.products = [];

		initializeDetails();
		initializeProducts();

		function initializeDetails() {
			var result = AppResource.getSellerDetails($scope.id);
			var a = AppResource.getSellerProducts($scope.id);
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

		function initializeProducts() {
			var result = AppResource.getSellerProducts($scope.id);
			if(result !== undefined) {
				result.success(function(s) {
				$scope.products = s;
				//Toastr ??
				}).error(function() {
					centrisNotify.error("sellers.Messages.LoadFailedDetails");
				});
			}
		}

		


			
	

	});