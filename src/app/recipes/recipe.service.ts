import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'Simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 3)]
    ),
    new Recipe(
      'A test recipe',
      'Simply a test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=300,272',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 3)]
    ),
  ];
  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
