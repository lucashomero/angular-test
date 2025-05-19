import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { FirstComponentComponent } from "./componentes/first-component/first-component.component";
import { ListRenderComponent } from "./componentes/list-render/list-render.component";
import { NgModel } from "@angular/forms";
import { ItemDetailComponent } from "./componentes/item-detail/item-detail.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent}
];

@NgModule({
    declarations: [], 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


