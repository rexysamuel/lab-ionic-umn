import { Injectable } from '@angular/core';
import { Home } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _home: Home[] = [
    new Home(
      'h1',
      'Basket',
      'Basket adalah UKM blabla bla...'
    ),
    new Home(
      'h2',
      'Drama',
      'Drama adalah UKM blabla bla...'
    ),
    new Home(
      'h3',
      'Volley',
      'Volley adalah UKM blabla bla...'
    ),
    new Home(
      'h4',
      'Futsal',
      'Futsal adalah UKM blabla bla...'
    ),
    new Home(
      'h5',
      'Bulu Tangkis',
      'Bulu Tangkis adalah UKM blabla bla...'
    ),
  ];

  getAllhome(){
    return[...this._home];
  }

  constructor() { }

  private myUKM:Home[] = [];

  setMyUKM(p:Home){
    this.myUKM.push(p);
  }

  getAllMyUKM(){
    return[...this.myUKM];
  }

  deleteMyUKM(id:string){
    this.myUKM = this.myUKM.filter(p =>{
      return p.id !== id
    });
    return this.myUKM;
  }
}
