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
			}).error(function() {
				//TODO ERROR
			});
		});
	};

		$scope.update = function update(s) {
			var oldSeller = $.extend({}, s);
		SellerDlg.show(oldSeller).then(function(s) {
			AppResource.updateSeller(s.id, s).success(function(s) {
			}).error(function() {
				//TODO ERROR
			});
		});
	};
	

	
	initialize();
	
});