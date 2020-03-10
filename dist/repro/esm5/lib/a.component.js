import { Component } from "@angular/core";
import * as i0 from "@angular/core";
var ComponentA = /** @class */ (function () {
    function ComponentA() {
    }
    ComponentA.prototype.ngOnInit = function () { };
    ComponentA.ɵfac = function ComponentA_Factory(t) { return new (t || ComponentA)(); };
    ComponentA.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentA, selectors: [["component-a"]], decls: 2, vars: 0, template: function ComponentA_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "component-b");
            i0.ɵɵelement(1, "component-c");
        } }, encapsulation: 2 });
    return ComponentA;
}());
export { ComponentA };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentA, [{
        type: Component,
        args: [{
                selector: "component-a",
                template: "\n    <component-b> </component-b>\n    <component-c> </component-c>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXByby8iLCJzb3VyY2VzIjpbImxpYi9hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQUlsRDtJQVNFO0lBQWUsQ0FBQztJQUVoQiw2QkFBUSxHQUFSLGNBQWtCLENBQUM7d0VBSFIsVUFBVTttREFBVixVQUFVO1lBTG5CLDhCQUE0QjtZQUM1Qiw4QkFBNEI7O3FCQVJoQztDQWdCQyxBQVpELElBWUM7U0FKWSxVQUFVO2tEQUFWLFVBQVU7Y0FSdEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsMEVBR1Q7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgU29tZVR5cGUgPSBSZWNvcmQ8YW55LCBhbnk+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29tcG9uZW50LWFcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y29tcG9uZW50LWI+IDwvY29tcG9uZW50LWI+XG4gICAgPGNvbXBvbmVudC1jPiA8L2NvbXBvbmVudC1jPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEEgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19