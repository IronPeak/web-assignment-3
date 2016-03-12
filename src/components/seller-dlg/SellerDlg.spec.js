"use strict";

describe('factory: SellerDlg', function() {
	
    var sellerdlg, uibmodal;
    
    beforeEach(module('project3App'));
	
	beforeEach(module('translateNoop'));
    
    beforeEach(inject(function($injector) {
        sellerdlg = $injector.get("SellerDlg");
		uibmodal = $injector.get("$uibModal");
    }));
	
	it("Should have show function defined", function() {			
		expect(sellerdlg.show).not.toBe(undefined);
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
		
		sellerdlg.show(obj);
		expect(parameter.resolve.modalParam()).toBe(obj);
	});
	
});
