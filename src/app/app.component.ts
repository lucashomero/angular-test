import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


import { FirstComponentComponent } from './componentes/first-component/first-component.component';
import { ParentDataComponent } from './componentes/parent-data/parent-data.component';
import { DirectivesComponent } from "./componentes/directives/directives.component";
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBindingComponent } from './componentes/two-way-binding/two-way-binding.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  username = "Lucas"
  userData = {
    email: "lucashomeroti@gmail.com",
    role: "CEO"
  }
  title = 'angular-test';
}
