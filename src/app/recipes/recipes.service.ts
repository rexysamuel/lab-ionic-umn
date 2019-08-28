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
    {
      id: 'r4',
      title: 'Chicken Express (Ayam Om)',
      imageUrl: 'https://radio.umn.ac.id/wp-content/uploads/2018/03/unnamed-10-300x200.jpg',
      ingredients: ['Ayam', 'Minyak', 'Mayonaise', 'Nasi', 'Saus Sambal']
    },
    {
      id: 'r5',
      title: 'Siomay Batagor',
      imageUrl: 'https://radio.umn.ac.id/wp-content/uploads/2018/03/unnamed-11-300x200.jpg',
      ingredients: ['Siomay', 'Batagor', 'Saus Kacang']
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
    var filtered = this.recipes.filter(recipe=>{
      return recipe.id !== recipeId
    })
    this.recipes = filtered;
    return this.recipes;
};

}
