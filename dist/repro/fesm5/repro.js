import { ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';

var ComponentA = /** @class */ (function () {
    function ComponentA() {
    }
    ComponentA.prototype.ngOnInit = function () { };
    ComponentA.ɵfac = function ComponentA_Factory(t) { return new (t || ComponentA)(); };
    ComponentA.ɵcmp = ɵɵdefineComponent({ type: ComponentA, selectors: [["component-a"]], decls: 2, vars: 0, template: function ComponentA_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "component-b");
            ɵɵelement(1, "component-c");
        } }, encapsulation: 2 });
    return ComponentA;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentA, [{
        type: Component,
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
    ComponentC.ɵcmp = ɵɵdefineComponent({ type: ComponentC, selectors: [["component-c"]], decls: 1, vars: 0, template: function ComponentC_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div");
        } }, encapsulation: 2 });
    return ComponentC;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentC, [{
        type: Component,
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
    ComponentB.ɵcmp = ɵɵdefineComponent({ type: ComponentB, selectors: [["component-b"]], decls: 1, vars: 0, template: function ComponentB_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "component-c");
        } }, directives: [ComponentC], encapsulation: 2 });
    return ComponentB;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ComponentB, [{
        type: Component,
        args: [{
                selector: "component-b",
                template: "\n    <component-c> </component-c>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var ReproModule = /** @class */ (function () {
    function ReproModule() {
    }
    ReproModule.ɵmod = ɵɵdefineNgModule({ type: ReproModule });
    ReproModule.ɵinj = ɵɵdefineInjector({ factory: function ReproModule_Factory(t) { return new (t || ReproModule)(); } });
    return ReproModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ReproModule, { declarations: [ComponentA, ComponentB, ComponentC], exports: [ComponentA, ComponentB, ComponentC] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReproModule, [{
        type: NgModule,
        args: [{
                declarations: [ComponentA, ComponentB, ComponentC],
                exports: [ComponentA, ComponentB, ComponentC]
            }]
    }], null, null); })();
ɵɵsetComponentScope(ComponentA, [ComponentA, ComponentB, ComponentC], []);

/*
 * Public API Surface of repro
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentA, ComponentB, ComponentC, ReproModule };
//# sourceMappingURL=repro.js.map
