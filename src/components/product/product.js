"use strict";

angular.module("project3App").directive("product",
	function productController () {

		return {
			restrict: 'E',
			replace: 'true',
			templateUrl: 'src/components/product/product.html',

			scope : {
				'product': '=',
				'view': '&onView',
				'edit': '&onEdit'
			}
		};

});