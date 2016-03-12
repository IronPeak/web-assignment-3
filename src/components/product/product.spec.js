"use strict";

describe('directive: product', function() {
	
    var element;
	    
    beforeEach(module('project3App'));
	
	beforeEach(module('translateNoop'));
	
	beforeEach(module('src/components/product/product.html'));
    
    beforeEach(inject(function($rootScope, $compile, $httpBackend) {
		
        element = angular.element('<product product="product"></product>');
		var scope = $rootScope.$new();
		scope.product = {
			id: 2,
			name: "captain cheesy",
			price: 50,
			quantitySold: 3,
			quantityInStock: 10,
			imagePath: "image.com/img.jpg"
		};
		element = $compile(element)(scope);
		scope.$digest();
    }));
	
	it("Product directive exists", function() {		
		expect(element).not.toBe(undefined);
	});
	
	it("Product directive should set product name", function() {
		var text = element.text();
		expect(text.search("products.Name: captain cheesy")).not.toBe(-1);
	});
	
	it("Product directive should set product price", function() {
		var text = element.text();
		expect(text.search("products.Price: 50")).not.toBe(-1);
	});
	
	it("Product directive should set product image", function() {
		expect(element.find('img').attr('src')).toBe("image.com/img.jpg");
	});
	
});