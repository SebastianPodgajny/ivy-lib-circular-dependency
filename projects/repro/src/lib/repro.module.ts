import { NgModule } from '@angular/core';
import { ComponentA } from './a.component';
import { ComponentB } from './b.component';
import { ComponentC } from './c.component';

@NgModule({
  declarations: [ComponentA, ComponentB, ComponentC],
  exports: [ComponentA, ComponentB, ComponentC]
})
export class ReproModule {}

export { ComponentA, ComponentB, ComponentC };
