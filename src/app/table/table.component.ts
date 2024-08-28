import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  title = 'Baller table';
  ballers: {name: string, position: string, age: number, team: string, isActive: boolean}[] = [
    { name: 'Lebron', position: 'PF', age: 36, team: 'Lakers', isActive: true },
    { name: 'Kobe', position: 'PF', age: 41, team: 'Lakers', isActive: true },
    { name: 'Curry', position: 'PG', age: 33, team: 'Warriors', isActive: true },
    { name: 'Durant', position: 'PG', age: 32, team: 'Nets', isActive: true },
    { name: 'Iverson', position: 'PG', age: 46, team: '76ers', isActive: true },
    { name: 'Shaq', position: 'PG', age: 49, team: 'Lakers', isActive: true },
    { name: 'Duncan', position: 'PG', age: 45, team: 'Spurs', isActive: true },
    { name: 'Garnett', position: 'PG', age: 45, team: 'Celtics', isActive: true },
    { name: 'Nash', position: 'PG', age: 47, team: 'Suns', isActive: true },
    { name: 'Pierce', position: 'PG', age: 43, team: 'Celtics', isActive: true }
  ];

  //sending data from parent to child as the list component is inside form component
  // @Input() playerData: { name: string; position: string; age: number; team: string; }[] = [];
  handleDataAdded(data: { name: string; position: string; age: number; team: string; isActive: boolean }[]){
    this.ballers.push(data[0]);
  }
  constructor(public dialog: MatDialog) {}

  openDialog(baller: { name: string; position: string; age: number; team: string; isActive: boolean }): void {
    this.dialog.open(DialogComponent, {
      data: {
        name: baller.name,
        position: baller.position
      }
    });
  }

  toggleIsActive(baller: any){
    baller.isActive = !baller.isActive;
  }


}
