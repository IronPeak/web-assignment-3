"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, AppResource) {
	
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
	
	$scope.add = function(seller) {
		var result = AppResource.addSeller(seller);
		if(result !== undefined) {
			result.success(function(s) {
				$scope.refreshSellers();
				initialize();
			}).error(function() {
				
			});
		}
	};

	$scope.update = function(id, seller) {
		var result = AppResource.updateSeller(id, seller);
		if(result !== undefined) {
			result.success(function(s) {
				$scope.refreshSellers();
				initialize();
			}).error(function() {
				
			});
		}
	};
	
	$(document).ready(function(){
		$("#myBtn").click(function(){
			$("#myModal").modal();
		});
	});
	
	$(document).ready(function(){
		$("#saveSeller").click(function(){
			$('.modal-body').find('textarea,input').val('');
			$("#myModal").modal('hide');
		});
	});
	
	initialize();
	
});