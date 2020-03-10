import { Component, OnInit } from "@angular/core";

export type SomeType = Record<any, any>;

@Component({
  selector: "component-a",
  template: `
    <component-b> </component-b>
    <component-c> </component-c>
  `,
  styles: []
})
export class ComponentA implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
