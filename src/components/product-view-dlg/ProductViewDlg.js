"use strict";

angular.module("project3App").factory("ProductViewDlg",
	function ProductDlg($uibModal) {
		return {
			show: function(object) {
				var modalInstance = $uibModal.open({
					templateUrl: "components/product-view-dlg/product-view-dlg.html",
					controller: "ProductViewDlgController",
					resolve: {
						modalParam: function () {
							return object;
						}
					}
				});

				return modalInstance.result;
			}
		};
	});