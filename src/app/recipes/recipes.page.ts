import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})

export class RecipesPage implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  tampilDetail(id){
    console.log(this.recipesService.getRecipe(id));
  }

  hapusRecipe(id){
    var index = this.recipesService.deleteRecipe(id);
    this.recipes.splice(index-1,1);
  }

}
