import { Subscription } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit,OnDestroy {
  place: Place;
  form:FormGroup;
  private placesSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.placesSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place=>{
        this.place = place;
      });
      this.form = new FormGroup({
        title: new FormControl(this.place.title,{
          updateOn:'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description,{
          updateOn:'blur',
          validators: [Validators.required,Validators.maxLength(180)]
        }),
      });
    });
  }
  ngOnDestroy(){
    if(this.placesSub){
      this.placesSub.unsubscribe();
    }
  }
}
