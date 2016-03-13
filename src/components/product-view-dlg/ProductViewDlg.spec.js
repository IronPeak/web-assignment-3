"use strict";

describe('factory: ProductViewDlg', function() {
	
    var productviewdlg, uibmodal;
    
    beforeEach(module('project3App'));
	
	beforeEach(module('translateNoop'));
	    
    beforeEach(inject(function($injector) {
        productviewdlg = $injector.get("ProductViewDlg");
		uibmodal = $injector.get("$uibModal");
    }));
	
	it("Should have show function defined", function() {			
		expect(productviewdlg.show).not.toBe(undefined);
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
		
		productviewdlg.show(obj);
		expect(parameter.resolve.modalParam()).toBe(obj);
	});
	
});
