"use strict";

describe("SellersDetailsController", function() {
	
	beforeEach(module("project3App"));
	
	beforeEach(module('translateNoop'));
		
	var controller, scope, appresources, centrisnotify, routeparams, dialogwindow;
	
	beforeEach(inject(function($rootScope, $injector) {
	
		scope = $rootScope.$new();
		appresources = $injector.get("AppResource");
	
	}));
	
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
		
		centrisnotify = {
			success: function(msg) {
				
			},
			error: function(msg) {
				
			}
		};
	});
	
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
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
		
		it("add should add product to appresources", function() {
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			dialogwindow.setData(product);
			spyOn(appresources, "addSellerProduct");
			
			scope.add();
			
			expect(appresources.addSellerProduct).toHaveBeenCalledWith(id, product);
		});
		
		it("add should notify user", function() {
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			spyOn(centrisnotify, "success");
			
			dialogwindow.setData(product);
			
			scope.add();
			
			expect(centrisnotify.success).toHaveBeenCalledWith("products.Messages.SaveSucceeded");
		});
		
		it("add should initalize products", function() {
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			spyOn(scope, "initializeProducts");
			
			dialogwindow.setData(product);
			
			scope.add();
			
			expect(scope.initializeProducts).toHaveBeenCalled();
		});
		
		it("add should reset scope product", function() {
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			var init = {
				id: '',
				name: '',
				price: '',
				quantitySold: '',
				quantityInStock: '',
				imagePath: ''
			};
					
			dialogwindow.setData(product);
			
			scope.add();
			
			expect(scope.product).toEqual(init);
		});
		
		it("update should update product in appresources", function() {
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			dialogwindow.setData(product);
			spyOn(appresources, "updateSellerProduct");
			
			scope.update(product);
			
			expect(appresources.updateSellerProduct).toHaveBeenCalledWith(id, product);
		});
		
		it("update should notify user", function() {
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			spyOn(centrisnotify, "success");
			
			dialogwindow.setData(product);
			
			scope.update(id);
			
			expect(centrisnotify.success).toHaveBeenCalledWith("products.Messages.EditSucceeded");
		});
		
		it("update should initalize products", function() {
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			spyOn(scope, "initializeProducts");
			
			dialogwindow.setData(product);
			
			scope.update(product);
			
			expect(scope.initializeProducts).toHaveBeenCalled();
		});
		
		it("update should reset scope product", function() {
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			var init = {
				id: '',
				name: '',
				price: '',
				quantitySold: '',
				quantityInStock: '',
				imagePath: ''
			};
					
			dialogwindow.setData(product);
			
			scope.update(product);
			
			expect(scope.product).toEqual(init);
		});
	
	});
	
	describe("AppResource success II", function() {
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 2
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
	
		it("constructor should define seller", function() {
			
			var seller = {
				id: 2,
				name: "Smíðaverkstæði Sigríðar",
				category: "Skartgripir",
				imagePath: "https://i.imgur.com/ywaPivVh.jpg"
			};
			
			expect(scope.seller).toEqual(seller);
			
		});
	});
	
	describe("AppResource no seller with ID", function() {
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 1337
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
			});
			
		}));
	
		it("constructor should notify user it failed to load seller details", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("seller.Messages.LoadFailedDetails");
			
		});
		
		it("add product should fail", function() {
			var id = 1337;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			dialogwindow.setData(product);
			
			scope.add();
			
			expect(centrisnotify.error).toHaveBeenCalledWith("products.Messages.SaveFailed");
		});
		
		it("update product should fail", function() {
			var id = 1337;
			var product = {
				id: 100,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
			
			dialogwindow.setData(product);
			
			scope.update(product);
			
			expect(centrisnotify.error).toHaveBeenCalledWith("products.Messages.EditFailed");
		});
		
	});
	
	describe("AppResource failure", function() {
		
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 1
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
			});
			
		}));
	
		it("constructor seller should centrisnotify error", function() {
			
			expect(centrisnotify.error).toHaveBeenCalledWith("seller.Messages.LoadFailedDetails");
			
		});
		
		it("constructor products should centrisnotify error", function() {
						
			expect(centrisnotify.error).toHaveBeenCalledWith("seller.Messages.LoadFailedDetails");
			
		});
		
		it("add error should notify user", function() {
			
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
						
			dialogwindow.setData(product);
			
			scope.add();
			
			expect(centrisnotify.error).toHaveBeenCalledWith("products.Messages.SaveFailed");
			
		});
		
		it("update error should notify user", function() {
			
			var id = 1;
			var product = {
				id: 1,
				name: 'productname',
				price: 50,
				quantitySold: 21,
				quantityInStock: 100,
				imagePath: "images.com/abc.jpg"
			};
						
			dialogwindow.setData(product);
			
			scope.update(product);
			
			expect(centrisnotify.error).toHaveBeenCalledWith("products.Messages.EditFailed");
			
		});
	
	});
	
	describe("AppResource failure II", function() {
		
		beforeEach(inject(function($controller) {
			
			routeparams = {
				id: 1
			};
												
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
				$routeParams: routeparams,
				ProductDlg: dialogwindow
			});
			
		}));
		
		it("Should define an empty array of products", function() {
			
			expect(scope.products).toEqual([]);
			
		});
		
	});
	
});