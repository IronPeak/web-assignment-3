"use strict";

angular.module("project3App").controller("navbarController",
	function navbarController($scope, $translate) {

		$scope.changelanguage = function(object) {
			$translate.use(object);
		};
	});
