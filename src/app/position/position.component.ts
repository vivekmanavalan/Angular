import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent {
  position: string = '';
  team: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.position = data['position'];
      this.team = data['team'];
    });
  }
}
