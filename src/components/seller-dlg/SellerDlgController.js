"use strict";

angular.module("project3App").controller("SellerDlgController",
	function SellerDlgController($scope, modalParam) {

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