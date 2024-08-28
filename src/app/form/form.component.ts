import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name: string = '';
  position: string = '';
  age: number = 0;
  team: string = '';
  records: { name: string; position: string; age: number; team: string;isActive: boolean }[] = [];
  handleSubmit(){
    this.records.push({name: this.name, position: this.position, age: this.age, team: this.team, isActive: true,})
    console.log(this.records);
    this.playerDataAdded.emit(this.records);
  }
  // sending data from child to parent
  @Output() playerDataAdded: EventEmitter<{ name: string; position: string; age: number; team: string; isActive: boolean}[]> = new EventEmitter();
}
