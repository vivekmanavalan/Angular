import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  title = 'basics';
  name = '';
  num : number=0;
  show: boolean = true;
  enableColour: boolean = false;
  enableItalic: boolean = false;
  handleInput(event: any) {
    this.name = event.target.value;
  }
}
