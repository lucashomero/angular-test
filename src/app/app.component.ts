import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './componentes/first-component/first-component.component';
import { ParentDataComponent } from './componentes/parent-data/parent-data.component';
import { DirectivesComponent } from "./componentes/directives/directives.component";
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username = "Lucas"
  userData = {
    email: "lucashomeroti@gmail.com",
    role: "CTO"
  }
  title = 'angular-test';
}
