import { Component, OnInit } from '@angular/core';

import { MenuController, NavController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private menuCtrl: MenuController, private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu(){
    this.menuCtrl.toggle('m1');
  }

}
