(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('repro', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.repro = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var ComponentA = /** @class */ (function () {
        function ComponentA() {
        }
        ComponentA.prototype.ngOnInit = function () { };
        ComponentA.ɵfac = function ComponentA_Factory(t) { return new (t || ComponentA)(); };
        ComponentA.ɵcmp = core["ɵɵdefineComponent"]({ type: ComponentA, selectors: [["component-a"]], decls: 2, vars: 0, template: function ComponentA_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "component-b");
                core["ɵɵelement"](1, "component-c");
            } }, encapsulation: 2 });
        return ComponentA;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ComponentA, [{
            type: core.Component,
            args: [{
                    selector: "component-a",
                    template: "\n    <component-b> </component-b>\n    <component-c> </component-c>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var ComponentC = /** @class */ (function () {
        function ComponentC() {
        }
        ComponentC.prototype.ngOnInit = function () { };
        ComponentC.ɵfac = function ComponentC_Factory(t) { return new (t || ComponentC)(); };
        ComponentC.ɵcmp = core["ɵɵdefineComponent"]({ type: ComponentC, selectors: [["component-c"]], decls: 1, vars: 0, template: function ComponentC_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "div");
            } }, encapsulation: 2 });
        return ComponentC;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ComponentC, [{
            type: core.Component,
            args: [{
                    selector: "component-c",
                    template: "\n    <div></div>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var ComponentB = /** @class */ (function () {
        function ComponentB() {
        }
        ComponentB.prototype.ngOnInit = function () { };
        ComponentB.ɵfac = function ComponentB_Factory(t) { return new (t || ComponentB)(); };
        ComponentB.ɵcmp = core["ɵɵdefineComponent"]({ type: ComponentB, selectors: [["component-b"]], decls: 1, vars: 0, template: function ComponentB_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "component-c");
            } }, directives: [ComponentC], encapsulation: 2 });
        return ComponentB;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ComponentB, [{
            type: core.Component,
            args: [{
                    selector: "component-b",
                    template: "\n    <component-c> </component-c>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var ReproModule = /** @class */ (function () {
        function ReproModule() {
        }
        ReproModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ReproModule });
        ReproModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ReproModule_Factory(t) { return new (t || ReproModule)(); } });
        return ReproModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ReproModule, { declarations: [ComponentA, ComponentB, ComponentC], exports: [ComponentA, ComponentB, ComponentC] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReproModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ComponentA, ComponentB, ComponentC],
                    exports: [ComponentA, ComponentB, ComponentC]
                }]
        }], null, null); })();
    core["ɵɵsetComponentScope"](ComponentA, [ComponentA, ComponentB, ComponentC], []);

    exports.ComponentA = ComponentA;
    exports.ComponentB = ComponentB;
    exports.ComponentC = ComponentC;
    exports.ReproModule = ReproModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=repro.umd.js.map
