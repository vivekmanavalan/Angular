import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeformat',
  templateUrl: './pipeformat.component.html',
  styleUrl: './pipeformat.component.css'
})
export class PipeformatComponent {
    name = 'kobe Bryant';
    today = new Date();
}
