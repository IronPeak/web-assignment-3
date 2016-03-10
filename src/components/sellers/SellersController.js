"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg) {
	
	function initialize() {
		$scope.seller = {
			id: '',
			name: '',
			category: '',
			imagePath: ''
		};
		
		$scope.refreshSellers();
	}
	
	$scope.refreshSellers = function() {
		AppResource.getSellers().success(function(sellers) {
			$scope.sellers = sellers;
		}).error(function() {
				
		});
	};


	$scope.onAddSeller = function onAddSeller() {

		SellerDlg.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
				var newSeller = seller;
			}).error(function() {
				//TODO ERROR
			});
		});
	};
	

	$scope.update = function(seller) {
		var id = seller.id;
		var result = AppResource.updateSeller(id, seller);
		if(result !== undefined) {
			result.success(function(s) {
				$scope.refreshSellers();
				initialize();
			}).error(function() {
				
			});
		}
	};
	
	initialize();
	
});