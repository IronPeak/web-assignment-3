"use strict";

angular.module("project3App").controller("SellersDetailsController",
	function SellersDetailsController($scope, AppResource, centrisNotify, $routeParams, ProductDlg, ProductViewDlg) {

		function initalize() {
			$scope.initializeSeller();
			$scope.initializeProduct();
			$scope.initializeDetails();
			$scope.initializeProducts();
			$scope.initializeTopProducts();
		}
		
		$scope.initializeSeller = function() {
			$scope.seller = {
				id: parseInt($routeParams.id),
				name: '',
				category: '',
				imagePath: ''
			};
		};

		$scope.initializeProduct = function() {
			$scope.product = {
				id: '',
				name: '',
				price: '',
				quantitySold: '',
				quantityInStock: '',
				imagePath: ''
			};
		};

		$scope.initializeDetails = function() {
			var result = AppResource.getSellerDetails($scope.seller.id);
			result.success(function(s) {
				$scope.seller.id = s.id;
				$scope.seller.name = s.name;
				$scope.seller.category = s.category;
				$scope.seller.imagePath = s.imagePath;
			}).error(function() {
				centrisNotify.error("sellers.Messages.LoadFailedDetails");
			});
		};

		$scope.initializeProducts = function() {
			$scope.products = [];
			var result = AppResource.getSellerProducts($scope.seller.id);
			result.success(function(s) {
				$scope.products = s;
			}).error(function() {
				centrisNotify.error("sellers.Messages.LoadFailedDetails");
			});
			return;
		};
		
		$scope.initializeTopProducts = function() {
			$scope.topProducts = $scope.products.slice(0);
			$scope.topProducts.sort(function(p1, p2) {
				if (p1.quantitySold < p2.quantitySold) {
					return 1;
				} else if (p1.quantitySold > p2.quantitySold) {
					return -1;
				} else {
					return 0;
				}
			});
			$scope.topProducts = $scope.topProducts.slice(0, 10);
		};
		
		$scope.add = function() {
			ProductDlg.show().then(function(product) {
				var result = AppResource.addSellerProduct($scope.seller.id, product);
				if(result !== undefined) {
					result.success(function(s) {
						centrisNotify.success("products.Messages.SaveSucceeded"); 
						$scope.initializeProducts();
						$scope.initializeProduct();
						$scope.initializeTopProducts();
					}).error(function() {
						centrisNotify.error("products.Messages.SaveFailed");
					});
				}
			});
		};
	
		$scope.update = function(product) {
			var oldProduct = $.extend({}, product);
			ProductDlg.show(oldProduct).then(function(updated) {
				var result = AppResource.updateSellerProduct($scope.seller.id, updated);
				if(result !== undefined) {
					result.success(function(s) {
						centrisNotify.success("products.Messages.EditSucceeded");
						$scope.initializeProducts();
						$scope.initializeProduct();
						$scope.initializeTopProducts();
					}).error(function() {
						centrisNotify.error("products.Messages.EditFailed");
					});
				}
			});
		};
		
		$scope.view = function(product) {
			var oldProduct = $.extend({}, product);
			ProductViewDlg.show(oldProduct).then(function(updated) {
				var result = AppResource.updateSellerProduct($scope.seller.id, updated);
				if(result !== undefined) {
					result.success(function(s) {

					}).error(function() {
						
					});
				}
			});
		};
		
		initalize();

	});