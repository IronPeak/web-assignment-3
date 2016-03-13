"use strict";

angular.module("project3App").controller("ProductViewDlgController",
	function ProductDlgController($scope, modalParam) {

		if(modalParam) {
			$scope.product = modalParam;
		}

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});