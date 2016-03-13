"use strict";

describe("SellersControllerSorting", function() {
	
	beforeEach(module("project3App"));
	
	beforeEach(module('translateNoop'));
	
	var controller, scope, appresources, dialogwindow, centris;
	
	beforeEach(function () {
		dialogwindow = {
			data: undefined,
			setData: function(d) {
				this.data = d;
			},
			show: function(arg) {
				var ret = this.data;
				return {
					then: function(fn) {
						fn(ret);
					}
				};
			}
		};
		
		centris = {
			success: function(msg) {
				
			},
			error: function(msg) {
				
			}
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
				{name: "Bjarni"}
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
		});
		
		it("Sort NameDesc should sort sellers reverse alphabetically by name", function() {
			scope.sortSellers("NameDesc");
			
			expect(scope.sellers[0].name).toEqual("Siggi");
			expect(scope.sellers[1].name).toEqual("Bjarni");
			expect(scope.sellers[2].name).toEqual("Aron");
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
		});
		
		it("Sort CategoryDesc should sort sellers reverse alphabetically by category", function() {
			scope.sortSellers("CategoryDesc");
			
			expect(scope.sellers[0].category).toEqual("Matur");
			expect(scope.sellers[1].category).toEqual("Fatnaður");
			expect(scope.sellers[2].category).toEqual("Egg og Mjólk");
		});
	
	});
	
});