import {
  ɵɵdefineComponent,
  ɵɵelement,
  ɵsetClassMetadata,
  Component,
  ɵɵdefineNgModule,
  ɵɵdefineInjector,
  ɵɵsetNgModuleScope,
  NgModule,
  ɵɵsetComponentScope
} from "@angular/core";

class ComponentA {
  constructor() {}
  ngOnInit() {}
}
ComponentA.ɵfac = function ComponentA_Factory(t) {
  return new (t || ComponentA)();
};
ComponentA.ɵcmp = ɵɵdefineComponent({
  type: ComponentA,
  selectors: [["component-a"]],
  decls: 2,
  vars: 0,
  template: function ComponentA_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "component-b");
      ɵɵelement(1, "component-c");
    }
  },
  encapsulation: 2
});
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    ComponentA,
    [
      {
        type: Component,
        args: [
          {
            selector: "component-a",
            template: `
    <component-b> </component-b>
    <component-c> </component-c>
  `,
            styles: []
          }
        ]
      }
    ],
    function() {
      return [];
    },
    null
  );
})();

class ComponentC {
  constructor() {}
  ngOnInit() {}
}
ComponentC.ɵfac = function ComponentC_Factory(t) {
  return new (t || ComponentC)();
};
ComponentC.ɵcmp = ɵɵdefineComponent({
  type: ComponentC,
  selectors: [["component-c"]],
  decls: 1,
  vars: 0,
  template: function ComponentC_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
    }
  },
  encapsulation: 2
});
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    ComponentC,
    [
      {
        type: Component,
        args: [
          {
            selector: "component-c",
            template: `
    <div></div>
  `,
            styles: []
          }
        ]
      }
    ],
    function() {
      return [];
    },
    null
  );
})();

class ComponentB {
  constructor() {}
  ngOnInit() {}
}
ComponentB.ɵfac = function ComponentB_Factory(t) {
  return new (t || ComponentB)();
};
ComponentB.ɵcmp = ɵɵdefineComponent({
  type: ComponentB,
  selectors: [["component-b"]],
  decls: 1,
  vars: 0,
  template: function ComponentB_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "component-c");
    }
  },
  directives: [ComponentC],
  encapsulation: 2
});
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    ComponentB,
    [
      {
        type: Component,
        args: [
          {
            selector: "component-b",
            template: `
    <component-c> </component-c>
  `,
            styles: []
          }
        ]
      }
    ],
    function() {
      return [];
    },
    null
  );
})();

class ReproModule {}
ReproModule.ɵmod = ɵɵdefineNgModule({ type: ReproModule });
ReproModule.ɵinj = ɵɵdefineInjector({
  factory: function ReproModule_Factory(t) {
    return new (t || ReproModule)();
  }
});
(function() {
  (typeof ngJitMode === "undefined" || ngJitMode) &&
    ɵɵsetNgModuleScope(ReproModule, {
      declarations: [ComponentA, ComponentB, ComponentC],
      exports: [ComponentA, ComponentB, ComponentC]
    });
})();
/*@__PURE__*/ (function() {
  ɵsetClassMetadata(
    ReproModule,
    [
      {
        type: NgModule,
        args: [
          {
            declarations: [ComponentA, ComponentB, ComponentC],
            exports: [ComponentA, ComponentB, ComponentC]
          }
        ]
      }
    ],
    null,
    null
  );
})();
ɵɵsetComponentScope(ComponentA, [ComponentA, ComponentB, ComponentC], []);

/*
 * Public API Surface of repro
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentA, ComponentB, ComponentC, ReproModule };
//# sourceMappingURL=repro.js.map
