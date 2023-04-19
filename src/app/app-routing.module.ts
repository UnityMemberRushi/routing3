import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

const routes: Routes = [
  {path: 'dynamic-form-question', component: DynamicFormQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
