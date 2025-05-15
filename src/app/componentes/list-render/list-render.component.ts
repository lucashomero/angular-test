import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 3},
    { name: 'Tom', type: 'Cat', age: 2},
    { name: 'Frida', type: 'Dog', age: 12},
    { name: 'Bob', type: 'Horse', age: 9}
  ]

animalDetails = '';

constructor(private listService: ListService) {}

showAge(animal: Animal){
  this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`  
}

removeAnimal(animal: Animal){
  console.log("Removendo animal...")
  this.animals = this.listService.remove(this.animals, animal)
}


}
