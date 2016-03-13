"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource, SellerDlg, centrisNotify) {
	
	function initialize() {
		$scope.sellers = [];
		$scope.sortoption = "NameAsc";
		$scope.initalizeSeller();
		$scope.refreshSellers();
		$scope.sortSellers($scope.sortoption);
	}
	
	$scope.sortSellers = function(sortoption) {
		$scope.sortoption = sortoption;
		if($scope.sortoption === "NameAsc") {
			$scope.sellers.sort($scope.compareNameAsc);
		} else if($scope.sortoption === "NameDesc") {
			$scope.sellers.sort($scope.compareNameDesc);
		} else if($scope.sortoption === "CategoryAsc") {
			$scope.sellers.sort($scope.compareCategoryAsc);
		} else if($scope.sortoption === "CategoryDesc") {
			$scope.sellers.sort($scope.compareCategoryDesc);
		} else {
			//Should not be seen by the user
			centrisNotify.error("Invalid sorting option");
		}
	};
	
	$scope.compareNameAsc = function(s1, s2) {
		if (s1.name.toLowerCase() < s2.name.toLowerCase()) {
			return -1;
		} else if (s1.name.toLowerCase() > s2.name.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	};
	
	$scope.compareNameDesc = function(s1, s2) {
		return -$scope.compareNameAsc(s1, s2);
	};
	
	$scope.compareCategoryAsc = function(s1, s2) {
		if (s1.category.toLowerCase() < s2.category.toLowerCase()) {
			return -1;
		} else if (s1.category.toLowerCase() > s2.category.toLowerCase()) {
			return 1;
		} else {
			return 0;
		}
	};
	
	$scope.compareCategoryDesc = function(s1, s2) {
		return -$scope.compareCategoryAsc(s1, s2);
	};
	
	$scope.initalizeSeller = function() {
		$scope.seller = {
			id: '',
			name: '',
			category: '',
			imagePath: ''
		};
	};
	
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
					centrisNotify.success("sellers.Messages.EditSucceeded");
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