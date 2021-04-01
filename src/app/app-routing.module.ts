import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DndPlaygroundComponent } from './dnd-playground/dnd-playground.component';

const routes: Routes = [
  {
    path: 'dndPlayground',
    component: DndPlaygroundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
