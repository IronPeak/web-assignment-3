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
		
		it("constructor should define products", function() {
			
			expect(scope.products).not.toBe(undefined);
			
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
	
		it("constructor seller should centrisnotify error", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("sellers.Messages.LoadFailedDetails");
			
		});
		
		it("constructor products should centrisnotify error", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("sellers.Messages.LoadFailedDetails");
			
		});
	
	});
	
	describe("AppResource result undefined", function() {
		
		beforeEach(inject(function($controller) {
			
			routeparams = {
				//An id that is not in the mock appresources
				id: undefined
			};
			
			centrisnotify = {
				error: function(msg) {
					
				}
			};
			
			spyOn(centrisnotify, "error");
			
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
	
		it("constructor seller should centrisnotify error", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("sellers.Messages.LoadFailedDetails");
			
		});
		
		it("constructor products should centrisnotify error", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("sellers.Messages.LoadFailedDetails");
			
		});
	
	});
	
});