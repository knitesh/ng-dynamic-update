import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponentComponent as NewComponent } from './new-component/new-component.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'new-component', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
