"use strict";

angular.module('translateNoop', [])
  .factory('$translateStaticFilesLoader', function ($q) {
    return function () {
      var deferred = $q.defer();
      deferred.resolve({});
      return deferred.promise;
    };
  });

describe("SellersController", function() {
	
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
	
	describe("AppResource success", function() {
		
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
	
		}));
		
		it("constructor should define seller in scope", function() {
			expect(scope.seller).not.toBe(undefined);
		});
		
		it("constructor should define sellers in scope", function() {
			expect(scope.sellers).not.toBe(undefined);
		});
		
		it("add should add seller to appresources", function() {			
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
			
			dialogwindow.setData(seller);
			spyOn(appresources, "addSeller");
			
			scope.add();
			
			expect(appresources.addSeller).toHaveBeenCalledWith(seller);
		});
		
		it("add should refresh sellers", function() {
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
					
			dialogwindow.setData(seller);
			spyOn(scope, "refreshSellers");
			
			scope.add();
			
			expect(scope.refreshSellers).toHaveBeenCalled();
		});
		
		it("update should updateSeller in appresources", function() {
			var id = 1;
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
			
			dialogwindow.setData(seller);
			spyOn(appresources, "updateSeller");
			
			scope.update(seller);
			
			expect(appresources.updateSeller).toHaveBeenCalledWith(id, seller);
		});
		
		it("update should refresh sellers I", function() {
			var id = 1;
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
			
			dialogwindow.setData(seller);
			spyOn(scope, "refreshSellers");
			
			scope.update(seller);
			
			expect(scope.refreshSellers).toHaveBeenCalled();
		});
		
		it("update should refresh sellers II", function() {
			var id = 13;
			var seller = {
				id: 13,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
			
			dialogwindow.setData(seller);
			spyOn(scope, "refreshSellers");
			
			scope.update(seller);
			
			expect(scope.refreshSellers).toHaveBeenCalled();
		});
	
	});
	
	describe("AppResource failure", function() {
		
		beforeEach(inject(function($controller, $rootScope, $injector) {
			
			scope = $rootScope.$new();
			appresources = $injector.get("AppResource");
			
			appresources.successLoadSellers = false;
			appresources.successAddSeller = false;
			appresources.successUpdateSeller = false;
			appresources.successLoadSellerDetails = false;
			appresources.successGetSellerProducts = false;
			appresources.successAddSellerProduct = false;
			appresources.successUpdateSellerProduct = false;
	
			controller = $controller("SellersController", {
				$scope: scope,
				AppResource: appresources,
				SellerDlg: dialogwindow,
				centrisNotify: centris
			});
	
		}));
		
		it("constructor should define seller in scope", function() {
			expect(scope.seller).not.toBe(undefined);
		});
		
		it("constructor should define an empty list of sellers", function() {
			expect(scope.sellers).toEqual([]);
		});
		
		it("failing add should add seller to appresources", function() {
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
					
			dialogwindow.setData(seller);
			spyOn(appresources, "addSeller");
			
			scope.add();
			
			expect(appresources.addSeller).toHaveBeenCalledWith(seller);
		});
		
		it("failing add should not refresh sellers", function() {
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
			
			dialogwindow.setData(seller);
			spyOn(scope, "refreshSellers");
			
			scope.add();
			
			expect(scope.refreshSellers).not.toHaveBeenCalled();
		});
		
		it("failing update should updateSeller in appresources", function() {
			var id = 1;
			var seller = {
				id: 1,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
					
			dialogwindow.setData(seller);
			spyOn(appresources, "updateSeller");
			
			scope.update(seller);
			
			expect(appresources.updateSeller).toHaveBeenCalledWith(id, seller);
		});
		
		it("failing update should not refresh sellers", function() {
			var id = 13;
			var seller = {
				id: 13,
				name: "SellerName",
				category: "Fatnadur",
				imagePath: "image.com/abc.jpg"
			};
					
			dialogwindow.setData(seller);
			spyOn(scope, "refreshSellers");
			
			scope.update(seller);
			
			expect(scope.refreshSellers).not.toHaveBeenCalled();
		});
	
	});
	
});