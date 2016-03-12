"use strict";

describe("SellersDetailsController", function() {
	
	beforeEach(module("project3App"));
	
	beforeEach(module('translateNoop'));
	
	var controller, scope, appresources, centrisnotify, routeparams;
	
	beforeEach(inject(function($rootScope, $injector) {
	
		scope = $rootScope.$new();
		appresources = $injector.get("AppResource");
	
	}));
	
	describe("AppResource success", function() {
		
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 1
			};
			
			appresources.successLoadSellers = true;
			appresources.successAddSeller = true;
			appresources.successUpdateSeller = true;
			appresources.successLoadSellerDetails = true;
			appresources.successGetSellerProducts = true;
			appresources.successAddSellerProduct = true;
			appresources.successUpdateSellerProduct = true;
			
			controller = $controller("SellersDetailsController", {
				$scope: scope,
				AppResource: appresources,
				centrisNotify: centrisnotify,
				$routeParams: routeparams
			});
			
		}));
	
		it("constructor should define seller", function() {
			
			var seller = {
				id: 1,
				name: "Hannyrðaþjónusta Hannesar",
				category: "Fatnaður",
				imagePath: "http://i.imgur.com/OYVpe2W.jpg?fb"
			};
			
			expect(scope.seller).toEqual(seller);
			
		});
	
	});
	
	describe("AppResource success", function() {
		
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 1
			};
			
			centrisnotify = {
				error: function(msg) {
					
				}
			};
			
			spyOn(centrisnotify, "error");
			
			appresources.successLoadSellers = false;
			appresources.successAddSeller = false;
			appresources.successUpdateSeller = false;
			appresources.successLoadSellerDetails = false;
			appresources.successGetSellerProducts = false;
			appresources.successAddSellerProduct = false;
			appresources.successUpdateSellerProduct = false;
			
			controller = $controller("SellersDetailsController", {
				$scope: scope,
				AppResource: appresources,
				centrisNotify: centrisnotify,
				$routeParams: routeparams
			});
			
		}));
	
		it("constructor should define seller", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("sellers.Messages.LoadFailedDetails");
			
		});
	
	});
	
});