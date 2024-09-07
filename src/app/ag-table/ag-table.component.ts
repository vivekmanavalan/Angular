import { Component, OnInit } from '@angular/core';
import { ColDef, ModuleRegistry } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ToggleRendererComponent } from '../toggle-renderer/toggle-renderer.component';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface IRow {
  make: string;
  price: number;
  electric: boolean;
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

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
      { make: 'Tesla',  price: 64950, electric: true },
      { make: 'Ford',  price: 33850, electric: false },
      { make: 'Toyota', price: 29600, electric: false },
      { make: 'Mercedes',  price: 48890, electric: true },
      { make: 'Fiat',  price: 15774, electric: false },
      { make: 'Nissan', price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [{ field: 'make' }, { field: 'price' }, { field: 'electric', headerName: 'Access', cellRenderer: 'toggleRenderer' }];

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

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        console.log("Saving changes", this.rowData);
      }
    });
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
