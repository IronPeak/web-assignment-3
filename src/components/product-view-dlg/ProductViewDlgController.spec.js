"use strict";

describe("ProductViewDlgController", function() {

    beforeEach(module("project3App"));

    beforeEach(module('translateNoop'));

    var controller, scope, modal;

    describe("With modalParam", function() {

        beforeEach(inject(function($controller, $rootScope, $injector) {

            scope = $rootScope.$new();
            modal = {
                var1: 10,
                var2: 'abc',
                var3: 1000,
                var4: "string"
            };

            controller = $controller("ProductViewDlgController", {
                $scope: scope,
                modalParam: modal
            });

        }));

        it("constructor should set scope product to modal", function() {
            expect(scope.product).toBe(modal);
        });

        it("onCancel should call dismiss", function() {

            scope.$dismiss = jasmine.createSpy('$dismiss');

            scope.onCancel();

            expect(scope.$dismiss).toHaveBeenCalled();
        });

    });

    describe("Without modalParam", function() {

        beforeEach(inject(function($controller, $rootScope, $injector) {

            scope = $rootScope.$new();
            modal = undefined;

            controller = $controller("ProductViewDlgController", {
                $scope: scope,
                modalParam: modal
            });

        }));

        it("onCancel should call dismiss", function() {

            scope.$dismiss = jasmine.createSpy('$dismiss');

            scope.onCancel();

            expect(scope.$dismiss).toHaveBeenCalled();
        });

    });

});