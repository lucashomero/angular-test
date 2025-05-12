import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  styleMap = {
    'font-size': '40px',
    'color': 'grey',
    'font-family': 'Arial'
  };

  classes = ['green-title', 'small-title']
  underline = ['underline-title']
}
