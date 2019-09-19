import { Injectable } from '@angular/core';
import { Place } from './places.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Serpong M-Town',
      '2BR apartment near Sumamrecon Mall Serpong.',
      'http://www.summareconbekasi.com/public/images/gallery/article/7082/IMG_3301-30.jpg',
      700000000
    ),
    new Place(
      'p2',
      'Scientia Residence',
      'Near UMN with many choices of foods around.',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123854_wh_3',
      500000000
    ),
    new Place(
      'p3',
      'Cluster Thomson',
      'Amazing cluster with swimming pool facilities.',
      'http://www.summareconbekasi.com/public/images/gallery/article/4542/Thomson-Gallery-4.jpg',
      1200000000
    ),
    new Place(
      'p4',
      'Cluster Newton',
      'Amazing cluster with swimming pool and gym facilities.',
      'https://rumahdijual.com/attachments/tangerang/3633822d1444626557-rumah-dijual-di-cluster-newton-gading-serpong-tangerang-newton-barat-3-52.jpg',
      1000000000
    ),
    new Place(
      'p5',
      'Dormitory Multimedia Nusantara University',
      'Good place to stay and study.',
      'https://www.umn.ac.id/wp-content/uploads/2015/07/dormi3-900x400.jpg',
      1000000000
    ),
  ];
  get places(){
    return [...this._places];
  }
  getPlaces(placeId:String){
    return{
      ...this._places.find(_places=>{
        return _places.id === placeId
      })
    };
  }
  constructor() { }
}
