"use strict";

describe("navbarController", function() {

    beforeEach(module("project3App"));

    beforeEach(module('translateNoop'));

    var controller, scope, translate;

    beforeEach(inject(function($controller, $rootScope, $injector) {

        scope = $rootScope.$new();
        translate = $injector.get("$translate");

        controller = $controller("navbarController", {
            $scope: scope,
            $translate: translate
        });

    }));

    it("constructor should define changelanguage function", function() {
        expect(scope.changelanguage).not.toBe(undefined);
    });

    it("changelanguage should set translate language", function() {

        var language = "en";

        spyOn(translate, "use");

        scope.changelanguage(language);

        expect(translate.use).toHaveBeenCalledWith(language);
    });

});