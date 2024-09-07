import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessComponent } from './access/access.component';
import { AccessdataService } from './accessdata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { AgTableComponent } from './ag-table/ag-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ToggleRendererComponent } from './toggle-renderer/toggle-renderer.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    DialogComponent,
    AgTableComponent,
    ToggleRendererComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    AgGridModule,
    MatDialogModule
  ],
  providers: [AccessdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
