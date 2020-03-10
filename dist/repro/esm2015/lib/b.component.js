import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./c.component";
export class ComponentB {
    constructor() {
    }
    ngOnInit() { }
}
ComponentB.ɵfac = function ComponentB_Factory(t) { return new (t || ComponentB)(); };
ComponentB.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentB, selectors: [["component-b"]], decls: 1, vars: 0, template: function ComponentB_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "component-c");
    } }, directives: [i1.ComponentC], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentB, [{
        type: Component,
        args: [{
                selector: "component-b",
                template: `
    <component-c> </component-c>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXByby8iLCJzb3VyY2VzIjpbImxpYi9iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFVbEQsTUFBTSxPQUFPLFVBQVU7SUFHckI7SUFBZSxDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDOztvRUFMUixVQUFVOytDQUFWLFVBQVU7UUFKbkIsOEJBQTRCOztrREFJbkIsVUFBVTtjQVB0QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU29tZVR5cGUgfSBmcm9tIFwiLi9hLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29tcG9uZW50LWJcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y29tcG9uZW50LWM+IDwvY29tcG9uZW50LWM+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50QiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwcm9wOiBTb21lVHlwZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19