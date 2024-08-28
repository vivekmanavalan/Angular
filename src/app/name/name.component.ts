import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  name: string = '';
  age: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.name = data['name'];
      this.age = data['age'];
    });
  }
}
