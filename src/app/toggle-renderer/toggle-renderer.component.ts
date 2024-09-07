import { Component } from '@angular/core';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-toggle-renderer',
  templateUrl: './toggle-renderer.component.html',
  styleUrl: './toggle-renderer.component.css'
})
export class ToggleRendererComponent implements ICellRenderer {
  params: any;
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.params = params;
    console.log("cell renderer called");
    return true;
  }

  onToggle(event: any) {
    console.log("cell renderer called 1");
    this.params.node.setDataValue(this.params.colDef.field, event.checked);
  }

  agInit(params: ICellRendererParams): void {
    console.log("cell renderer called 2");
    this.params = params;
  }

}
