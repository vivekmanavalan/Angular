import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck {
  ngDoCheck(): void {
    if (this.playerData.length > 0) {
      console.log('Player data array has been modified');
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called and below are the lifecycle hooks in angular');
    console.log('ngOnInit called once when the component is initialized.');
    console.log('ngOnChanges called each time a change is made for the input property.');
    console.log('ngDoCheck called each time change detection runs and ngOnChanges does not detect array and object changes but ngDoCheck does it');
  }
  @Input() name: string = '';
  @Input() playerData: { name: string; position: string; age: number; team: string; }[] = [];
}
