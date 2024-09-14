import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgTableComponent } from './ag-table/ag-table.component';

const routes: Routes = [
  { path: 'access', component: AgTableComponent },
  // { path: '', redirectTo: '/access', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/access' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
