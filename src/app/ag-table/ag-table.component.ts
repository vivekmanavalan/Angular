import { Component, OnInit, ViewChild } from '@angular/core';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ToggleRendererComponent } from '../toggle-renderer/toggle-renderer.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';

interface IRow {
  make: string;
  price: number;
  electric: boolean;
  lastModified: Date;
}

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrl: './ag-table.component.css'
})
export class AgTableComponent implements OnInit { 

  originalData: any[] = [];
  constructor(public dialog: MatDialog) {}
  themeClass = "ag-theme-quartz";
  @ViewChild('agGrid')
  agGrid!: AgGridAngular;

  getYesterdayDate(): Date {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
  }

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
      { make: 'Tesla',  price: 64950, electric: true, lastModified: this.getYesterdayDate() },
      { make: 'Ford',  price: 33850, electric: false, lastModified: this.getYesterdayDate() },
      { make: 'Toyota', price: 29600, electric: false, lastModified: this.getYesterdayDate() },
      { make: 'Mercedes',  price: 48890, electric: true, lastModified: this.getYesterdayDate() },
      { make: 'Fiat',  price: 15774, electric: false, lastModified: this.getYesterdayDate() },
      { make: 'Nissan', price: 20675, electric: false, lastModified: this.getYesterdayDate() },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [{ field: 'make' }, { field: 'price' }, 
    { field: 'electric', headerName: 'Access', cellRenderer: 'toggleRenderer' }, 
    { field: 'lastModified' }];

  defaultColDef: ColDef = {
      flex: 1,
  };

  frameworkComponents = {
      toggleRenderer: ToggleRendererComponent,
  };

  ngOnInit() {
    // Store a copy of the original data
    this.originalData = JSON.parse(JSON.stringify(this.rowData));
  }

  saveChanges(){
    const changes = this.getChanges();
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { changes }
    });

    this.rowData.forEach((row, index) => {
      const originalRow = this.originalData[index];
      if (JSON.stringify(row) !== JSON.stringify(originalRow)) {
        row.lastModified = new Date();
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        console.log("Saving changes", this.rowData);
      }
    });
    this.agGrid.api.refreshCells({ force: true });
  }

  getChanges(): string[] {
    const changes: string[] = [];
    this.rowData.forEach((row, index) => {
      const originalRow = this.originalData[index];
      if (JSON.stringify(row) !== JSON.stringify(originalRow)) {
        changes.push(`Make: ${row.make}, Price: ${row.price}, Electric: ${row.electric}`);
      }
    });
    return changes;
  }
}
