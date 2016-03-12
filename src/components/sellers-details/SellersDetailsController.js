"use strict";

angular.module("project3App").controller("SellersDetailsController",
	function SellersDetailsController($scope, AppResource, centrisNotify, $routeParams, ProductDlg) {

		$scope.seller = {
			id: parseInt($routeParams.id),
			name: '',
			category: '',
			imagePath: ''
		};

		$scope.products = [];

		initializeDetails();
		initializeProducts();



		function initializeDetails() {
			var result = AppResource.getSellerDetails($scope.seller.id);
			result.success(function(s) {
				$scope.seller.id = s.id;
				$scope.seller.name = s.name;
				$scope.seller.category = s.category;
				$scope.seller.imagePath = s.imagePath;
				//Toastr ??
			}).error(function() {
				centrisNotify.error("sellers.Messages.LoadFailedDetails");
			});
		}

		function initializeProducts() {
			var result = AppResource.getSellerProducts($scope.seller.id);
			result.success(function(s) {
				$scope.products = s;
				//Toastr ??
			}).error(function() {
				centrisNotify.error("sellers.Messages.LoadFailedDetails");
			});
			return;
		}

	});