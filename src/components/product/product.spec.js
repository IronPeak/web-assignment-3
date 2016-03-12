"use strict";

describe('directive: product', function() {
	
    var element;
	    
    beforeEach(module('project3App'));
	
	beforeEach(module('translateNoop'));
    
    beforeEach(inject(function($rootScope, $compile, $httpBackend) {
		
		$httpBackend.whenGET("src/components/product/product.html")
		.respond('<div>Hello Man</div>');
		
		$httpBackend.expectGET("src/components/product/product.html");
		
        element = angular.element('<product>{{product.name}}</product>');
		var scope = $rootScope.$new();
		scope.products = [{
			id: 1,
			product: {
				id: 2,
				name: "product name",
				price: 50,
				quantitySold: 3,
				quantityInStock: 10,
				imagePath: "image.com/img.jpg"
			}
		}];
		element = $compile(element)(scope);
		scope.$digest();
    }));
	
	it("Product directive exists", function() {		
	    console.log(element);
		expect(element).not.toBe(undefined);
	});
	
});