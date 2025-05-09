import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  name:string = "Lucas Homero";
  profissao:string = "Arquiteto de Software";
  empresa = ["Apple", "Microsoft", "Google"]
  pessoa = {
    faculdade: "Universidade Catolica de Brasilia",
    nivel_ensino: "Mestre em Arquitetura de Sistemas"
  }
}
