import { Component, OnInit } from "@angular/core";
import { SomeType } from "./a.component";

@Component({
  selector: "component-b",
  template: `
    <component-c> </component-c>
  `,
  styles: []
})
export class ComponentB implements OnInit {
  public prop: SomeType;

  constructor() {}

  ngOnInit(): void {}
}
