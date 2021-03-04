import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntreesComponent } from './entrees/entrees.component';

const routes: Routes = [
  { path: 'entrees', component: EntreesComponent },
  { path: 'root', component: AppComponent },
  {path: '', redirectTo: '/entrees', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
