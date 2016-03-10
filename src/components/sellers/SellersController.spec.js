"use strict";

describe("SellersController", function() {
	
	beforeEach(module("project3App"));
	
	var controller, scope, appresources;
	
    beforeEach(inject(function($controller, $rootScope, $injector) {

        scope = $rootScope.$new();
		appresources = $injector.get("AppResource");

        controller = $controller("SellersController", {
            $scope: scope,
            AppResource: appresources
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
			id: 13,
			name: "SellerName",
			category: "Fatnadur",
			imagePath: "image.com/abc.jpg"
		};
				
		spyOn(appresources, "addSeller");
		
		scope.add(seller);
		
		expect(appresources.addSeller).toHaveBeenCalledWith(seller);
    });
	
	it("add should refresh sellers", function() {
        var seller = {
			id: 13,
			name: "SellerName",
			category: "Fatnadur",
			imagePath: "image.com/abc.jpg"
		};
				
		spyOn(scope, "refreshSellers");
		
		scope.add(seller);
		
		expect(scope.refreshSellers).toHaveBeenCalled();
    });
	
	it("update should updateSeller in appresources", function() {
		var id = 13;
        var seller = {
			id: 13,
			name: "SellerName",
			category: "Fatnadur",
			imagePath: "image.com/abc.jpg"
		};
				
		spyOn(appresources, "updateSeller");
		
		scope.update(id, seller);
		
		expect(appresources.updateSeller).toHaveBeenCalledWith(id, seller);
    });
	
	it("update should refresh sellers", function() {
		var id = 13;
        var seller = {
			id: 13,
			name: "SellerName",
			category: "Fatnadur",
			imagePath: "image.com/abc.jpg"
		};
				
		spyOn(scope, "refreshSellers");
		
		scope.update(id, seller);
		
		expect(scope.refreshSellers).toHaveBeenCalled();
    });
	
});