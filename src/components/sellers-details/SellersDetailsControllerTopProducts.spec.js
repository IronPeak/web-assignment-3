"use strict";

describe("SellersDetailsControllerTopProducts", function() {
	
	beforeEach(module("project3App"));
	
	beforeEach(module('translateNoop'));
		
	var controller, scope, appresources, centrisnotify, routeparams, dialogwindow;
	
	beforeEach(inject(function($rootScope, $injector) {
	
		scope = $rootScope.$new();
		appresources = $injector.get("AppResource");
	
	}));
	
	describe("AppResource Products", function() {
		
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
			});
			
		}));
	
		it("Should sort products by quantity sold", function() {
			
			expect(scope.topProducts.length).toEqual(10);
			expect(scope.topProducts[0].name).toEqual("Sokkar");
			expect(scope.topProducts[1].name).toEqual("Teppi");
			expect(scope.topProducts[2].name).toEqual("Húfa");
			expect(scope.topProducts[3].name).toEqual("Trefill");
			expect(scope.topProducts[4].name).toEqual("Slaufa");
			expect(scope.topProducts[5].name).toEqual("Ullarvettlingar");
			expect(scope.topProducts[6].name).toEqual("Ullarsokkar");
			expect(scope.topProducts[7].name).toEqual("Lambhúshetta");
			expect(scope.topProducts[8].name).toEqual("Hvítir vettlingar");
			expect(scope.topProducts[9].name).toEqual("Peysa");
			
		});
	
	});
	
	describe("Custom Products", function() {
		
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
			});
			
			scope.products = [
				{name: "Jakki500", quantitySold: 500},
				{name: "Jakki750", quantitySold: 750},
				{name: "Jakki100", quantitySold: 100},
				{name: "Jakki500", quantitySold: 500},
				{name: "Jakki700", quantitySold: 700}
			];
			
		}));
	
		it("Should sort products by quantity sold", function() {
			
			scope.initializeTopProducts();
			
			expect(scope.topProducts.length).toEqual(5);
			
			expect(scope.topProducts[0].name).toEqual("Jakki750");
			expect(scope.topProducts[1].name).toEqual("Jakki700");
			expect(scope.topProducts[2].name).toEqual("Jakki500");
			expect(scope.topProducts[3].name).toEqual("Jakki500");
			expect(scope.topProducts[4].name).toEqual("Jakki100");
			
			expect(scope.topProducts[0].quantitySold).toEqual(750);
			expect(scope.topProducts[1].quantitySold).toEqual(700);
			expect(scope.topProducts[2].quantitySold).toEqual(500);
			expect(scope.topProducts[3].quantitySold).toEqual(500);
			expect(scope.topProducts[4].quantitySold).toEqual(100);
			
		});
	
	});
	
});