"use strict";

angular.module("project3App").controller("ProductDlgController",
	function ProductDlgController($scope, modalParam) {

		if(modalParam) {
			$scope.seller = modalParam;
		}

		$scope.onOk = function onOk() {
			$scope.$close($scope.seller);
		};

		$scope.onCancel = function onCancel() {
			$scope.$dismiss();
		};

	});