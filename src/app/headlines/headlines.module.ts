import { MaterialModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';
import { HeadlinesComponent } from './headlines.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
];

@NgModule({
  declarations: [ HeadlinesComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HeadlinesModule { }
