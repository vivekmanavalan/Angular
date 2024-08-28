import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { PipeformatComponent } from './pipeformat/pipeformat.component';
import { DatePipe } from '@angular/common';
import { FormComponent } from './form/form.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DialogComponent } from './dialog/dialog.component';
import { NameComponent } from './name/name.component';
import { PositionComponent } from './position/position.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const appRoutes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'table', component: TableComponent},
  {path:'basic', component: DatabindingComponent},
  {path: 'docarg/:id', component: DocumentsComponent},
  { path: 'name', component: NameComponent },
  { path: 'position', component: PositionComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PipeformatComponent,
    FormComponent,
    LifecycleComponent,
    DocumentsComponent,
    DatabindingComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes),
    MatSlideToggleModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
