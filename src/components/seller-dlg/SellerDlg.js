"use strict";

angular.module("project3App").factory("SellerDlg",
	function SellerDlg($uibModal) {
		return {
			show: function(object) {
				var modalInstance = $uibModal.open({
					templateUrl: "components/seller-dlg/seller-dlg.html",
					controller: "SellerDlgController",
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