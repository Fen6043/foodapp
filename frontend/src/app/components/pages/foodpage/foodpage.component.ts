import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [RouterModule,CommonModule,RatingModule,FormsModule],
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
  foods:Food[] = [];
constructor (private foodservice:FoodService)
{
  this.foods = foodservice.getAll();
}
}
