import { Injectable } from '@angular/core';
import { gebetan } from './calon-gebetan.model';

@Injectable({
  providedIn: 'root'
})
export class CalonGebetanService {

  private _gebetan: gebetan[] = [
    new gebetan(
      'g1',
      'Shinta Kusuma Dewi',
      'Aku suka cowo macho',
      'Perempuan',
      'https://media.istockphoto.com/photos/beautiful-woman-picture-id927570754?k=6&m=927570754&s=612x612&w=0&h=j-z3Ed2Ex8iIBp6WfP75OMgAPmzqgDuH9Ghk6B7N_B4=',
      'female'
    ),
    new gebetan(
      'g2',
      'Tony Hehe',
      'Aku cowo humoris',
      'Laki-laki',
      'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=',
      'male'
    ),
    new gebetan(
      'g3',
      'Bella Humorisa',
      'Aku suka ketawa',
      'Perempuan',
      'https://image.shutterstock.com/mosaic_250/2967241/776697943/stock-photo-pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-at-776697943.jpg',
      'female'
    ),
    new gebetan(
      'g4',
      'Joko Pintar',
      'Aku cowo jenius',
      'Laki-laki',
      'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'male'
    ),
    new gebetan(
      'g5',
      'John Thor',
      'Aku tinggal di Asgard',
      'Laki-laki',
      'https://pbs.twimg.com/profile_images/545093550128394241/p4xNPId4_400x400.jpeg',
      'male'
    ),
    new gebetan(
      'g6',
      'Lucinta Luna',
      'Aku macho tapi cantik',
      'Laki-laki',
      'https://images.solopos.com/2019/09/lucinta-luna-.jpg',
      'male'
    ),
    new gebetan(
      'g7',
      'Atta Halilintar',
      'Aku suka cosplay jadi gembel',
      'Laki-laki',
      'https://obs.line-scdn.net/0hDC9gYCmEG2wEHjFTDwNkOz5IGAM3cghvYChKclRwRVh7KlU7P30EAidJRw99K1wyai9cCSIZAF0hJlk5bXoE/w644',
      'male'
    ),
    new gebetan(
      'g8',
      'Baby Fey',
      'Aku suka cari sensasi',
      'Perempuan',
      'https://cdn0-production-images-kly.akamaized.net/Dcgxx-BDoLjq846b3nR7qXl9Pg4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2874266/original/002073200_1565080928-bebby_fey02.JPG',
      'female'
    ),
  ];

  get gebetan(){
    return [...this._gebetan];
  }

  constructor() { }

  private myGebetan:gebetan[] = [];

  setGebetan(p:gebetan){
    this.myGebetan.push(p);
  }

  getAllGebetan(){
    return[...this.myGebetan];
  }

  deleteGebetan(id:string){
    this.myGebetan = this.myGebetan.filter(p =>{
      return p.id !== id
    });
    return this.myGebetan;
  }
}
