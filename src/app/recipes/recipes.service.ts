import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

    private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://img-global.cpcdn.com/003_recipes/bd2e55f663e049ef/751x532cq70/gado-gado-siram-surabaya-foto-resep-utama.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://craftlog.com/m/i/5135432=s1280=h960.webp',
      ingredients: ['Lontong', 'Santan', 'Tahu Goreng', 'Mozzarella']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://img.taste.com.au/Wf8mL7LT/w720-h480-cfill-q80/taste/2016/11/jessica-39581-2.jpeg',
      ingredients: ['Dough', 'Tomato Sauce', 'Bumbu Kecap', 'Saus Kacang']
    },
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
        ...this.recipes.find(recipe =>{
            return recipe.id === recipeId;
        })
    };
  }

  deleteRecipe(recipeId: string){
    var i = 0;
    var index = -1;

    this.recipes.forEach(element=>{
      i++;
      if(element.id == recipeId){
        index = i;
      }
      
    });
    
    return index;
};

}
