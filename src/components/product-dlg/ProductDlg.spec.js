"use strict";

describe('factory: ProductDlg', function() {
	
    var productdlg, uibmodal;
    
    beforeEach(module('project3App'));
	
	beforeEach(module('translateNoop'));
    
    beforeEach(inject(function($injector) {
        productdlg = $injector.get("ProductDlg");
		uibmodal = $injector.get("$uibModal");
    }));
	
	it("Should have show function defined", function() {			
		expect(productdlg.show).not.toBe(undefined);
	});
	
	it("show object should set modalParam to return object", function() {			
		var obj = {
			var1: 1,
			var2: 2,
			var3: "3"
		};
		
		var parameter;
		uibmodal.open = function(arg) {
			parameter = arg;
			return {
				result: "result"
			};
		};
		
		productdlg.show(obj);
		expect(parameter.resolve.modalParam()).toBe(obj);
	});
	
});
