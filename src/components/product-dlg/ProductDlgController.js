"use strict";

angular.module("project3App").controller("ProductDlgController",
    function ProductDlgController($scope, modalParam) {

        if (modalParam) {
            $scope.product = modalParam;
        }

        $scope.onOk = function onOk() {
            $scope.$close($scope.product);
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };

    });