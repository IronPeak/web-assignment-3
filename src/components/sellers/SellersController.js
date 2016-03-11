"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {
	
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
			centrisNotify.error("sellers.Messages.LoadFailed");
		});
	};



	$scope.add = function() {
		SellerDlg.show().then(function(seller) {
			var result = AppResource.addSeller(seller);
			if(result !== undefined) {
				result.success(function(s) {
					centrisNotify.success("sellers.Messages.SaveSucceeded"); 
					$scope.refreshSellers();			
					initialize();
				}).error(function() {
					centrisNotify.error("sellers.Messages.SaveFailed");
				});
			}
		});
	};

	$scope.update = function(seller) {
		var oldSeller = $.extend({}, seller);
		SellerDlg.show(oldSeller).then(function(updated) {
			var result = AppResource.updateSeller(seller.id, updated);
			if(result !== undefined) {
				result.success(function(s) {
					centrisNotify.success("sellers.Messages.EditSucceded");
					$scope.refreshSellers();
					initialize();
				}).error(function() {
					centrisNotify.error("sellers.Messages.EditFailed");
				});
			}
		});
	};
	

	
	initialize();
	
});