import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placeService: PlacesService,
    private modalCtrl: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  goBack() {
    //this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
    //this.navCtrl.pop();
  }

  onBookPlace() {
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('BOOKED!');
          this.bookThisPlaceLoading();
        }
      });
  }

  bookThisPlaceLoading() {
    // this.isLoading = true;
    this.loadingController.create({
      keyboardClose: true,
      message: 'Booking the place...'
    })
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          loadingEl.dismiss();
          this.bookThisPlaceToast();
        }, 2000);
      });
  }

  async bookThisPlaceToast() {
    const toast = await this.toastController.create({
      message: 'Booked!',
      duration: 2000
    });
    toast.present();
  }

}
