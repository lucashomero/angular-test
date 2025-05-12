import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent {
  @Input() name: string = "";
  @Input() dados!: {email:string, role:string}

  constructor () {}

}
