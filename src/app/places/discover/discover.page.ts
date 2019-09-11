import { Component, OnInit } from '@angular/core';

import { MenuController, NavController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private menuCtrl: MenuController, private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu(){
    this.menuCtrl.toggle('m1');
  }

  onFilterUpdate(evt: CustomEvent<SegmentChangeEventDetail>) {
    console.log(evt.detail);
    }

}
