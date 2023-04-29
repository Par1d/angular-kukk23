import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes$ = this.recipeService.get();

  constructor(private recipeService: RecipeService) {}
}
