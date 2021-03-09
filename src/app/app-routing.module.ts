import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntreesComponent } from './entrees/entrees.component';
import { EntreeDetailComponent } from './entree-detail/entree-detail.component';

const routes: Routes = [
  { path: 'entrees', component: EntreesComponent },
  { path: 'root', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
