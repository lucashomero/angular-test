import { Component } from '@angular/core';

import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  animal?: Animal
  
  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal()
  }


  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))

  }
}
