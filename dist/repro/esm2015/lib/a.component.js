import { Component } from "@angular/core";
import * as i0 from "@angular/core";
export class ComponentA {
    constructor() {
    }
    ngOnInit() { }
}
ComponentA.ɵfac = function ComponentA_Factory(t) { return new (t || ComponentA)(); };
ComponentA.ɵcmp = i0.ɵɵdefineComponent({ type: ComponentA, selectors: [["component-a"]], decls: 2, vars: 0, template: function ComponentA_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "component-b");
        i0.ɵɵelement(1, "component-c");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentA, [{
        type: Component,
        args: [{
                selector: "component-a",
                template: `
    <component-b> </component-b>
    <component-c> </component-c>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9yZXByby8iLCJzb3VyY2VzIjpbImxpYi9hLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQVlsRCxNQUFNLE9BQU8sVUFBVTtJQUNyQjtJQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7O29FQUhSLFVBQVU7K0NBQVYsVUFBVTtRQUxuQiw4QkFBNEI7UUFDNUIsOEJBQTRCOztrREFJbkIsVUFBVTtjQVJ0QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7O0dBR1Q7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IHR5cGUgU29tZVR5cGUgPSBSZWNvcmQ8YW55LCBhbnk+O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiY29tcG9uZW50LWFcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y29tcG9uZW50LWI+IDwvY29tcG9uZW50LWI+XG4gICAgPGNvbXBvbmVudC1jPiA8L2NvbXBvbmVudC1jPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEEgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19