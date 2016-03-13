"use strict";

describe("SellersControllerSorting", function() {
	
	beforeEach(module("project3App"));
	
	beforeEach(module('translateNoop'));
	
	var controller, scope, appresources, dialogwindow, centris;
	
	beforeEach(function () {
		dialogwindow = {

		};
		
		centris = {

		};
	});
	
	describe("Name", function() {
		
		beforeEach(inject(function($controller, $rootScope, $injector) {
	
			scope = $rootScope.$new();
			appresources = $injector.get("AppResource");
			
			appresources.successLoadSellers = true;
			appresources.successAddSeller = true;
			appresources.successUpdateSeller = true;
			appresources.successLoadSellerDetails = true;
			appresources.successGetSellerProducts = true;
			appresources.successAddSellerProduct = true;
			appresources.successUpdateSellerProduct = true;
	
			controller = $controller("SellersController", {
				$scope: scope,
				AppResource: appresources,
				SellerDlg: dialogwindow,
				centrisNotify: centris
			});
			
			scope.sellers = [
			    {name: "Aron"},
				{name: "Siggi"},
				{name: "Bjarni"},
				{name: "Siggi"}
			];
	
		}));
		
		it("constructor should define sort option", function() {
			expect(scope.sortoption).not.toBe(undefined);
		});
		
		it("Sort NameAsc should sort sellers alphabetically by name", function() {
			scope.sortSellers("NameAsc");
			
			expect(scope.sellers[0].name).toEqual("Aron");
			expect(scope.sellers[1].name).toEqual("Bjarni");
			expect(scope.sellers[2].name).toEqual("Siggi");
			expect(scope.sellers[3].name).toEqual("Siggi");
		});
		
		it("Sort NameDesc should sort sellers reverse alphabetically by name", function() {
			scope.sortSellers("NameDesc");
			
			expect(scope.sellers[0].name).toEqual("Siggi");
			expect(scope.sellers[1].name).toEqual("Siggi");
			expect(scope.sellers[2].name).toEqual("Bjarni");
			expect(scope.sellers[3].name).toEqual("Aron");
		});
		
		it("Other sorting options should not change the list", function() {
			centris.error = jasmine.createSpy("error");
			
			scope.sortSellers("something");
			
			expect(scope.sellers[0].name).toEqual("Aron");
			expect(scope.sellers[1].name).toEqual("Siggi");
			expect(scope.sellers[2].name).toEqual("Bjarni");
			expect(scope.sellers[3].name).toEqual("Siggi");
			
			expect(centris.error).toHaveBeenCalled();
		});
	
	});
	
	describe("Category", function() {
		
		beforeEach(inject(function($controller, $rootScope, $injector) {
	
			scope = $rootScope.$new();
			appresources = $injector.get("AppResource");
			
			appresources.successLoadSellers = true;
			appresources.successAddSeller = true;
			appresources.successUpdateSeller = true;
			appresources.successLoadSellerDetails = true;
			appresources.successGetSellerProducts = true;
			appresources.successAddSellerProduct = true;
			appresources.successUpdateSellerProduct = true;
	
			controller = $controller("SellersController", {
				$scope: scope,
				AppResource: appresources,
				SellerDlg: dialogwindow,
				centrisNotify: centris
			});
			
			scope.sellers = [
			    {category: "Fatnaður"},
				{category: "Matur"},
				{category: "Matur"},
				{category: "Egg og Mjólk"}
			];
	
		}));
		
		it("constructor should define sort option", function() {
			expect(scope.sortoption).not.toBe(undefined);
		});
		
		it("Sort CategoryAsc should sort sellers alphabetically by category", function() {
			scope.sortSellers("CategoryAsc");
			
			expect(scope.sellers[0].category).toEqual("Egg og Mjólk");
			expect(scope.sellers[1].category).toEqual("Fatnaður");
			expect(scope.sellers[2].category).toEqual("Matur");
			expect(scope.sellers[3].category).toEqual("Matur");
		});
		
		it("Sort CategoryDesc should sort sellers reverse alphabetically by category", function() {
			scope.sortSellers("CategoryDesc");
			
			expect(scope.sellers[0].category).toEqual("Matur");
			expect(scope.sellers[1].category).toEqual("Matur");
			expect(scope.sellers[2].category).toEqual("Fatnaður");
			expect(scope.sellers[3].category).toEqual("Egg og Mjólk");
		});
		
		it("Other sorting options should not change the list", function() {
			centris.error = jasmine.createSpy("error");
			
			scope.sortSellers("something");
			
			expect(scope.sellers[0].category).toEqual("Fatnaður");
			expect(scope.sellers[1].category).toEqual("Matur");
			expect(scope.sellers[2].category).toEqual("Matur");
			expect(scope.sellers[3].category).toEqual("Egg og Mjólk");
			
			expect(centris.error).toHaveBeenCalled();
		});
	
	});
	
});