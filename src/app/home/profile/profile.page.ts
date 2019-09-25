import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../home.service';
import { IonItemSliding, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myUKM : Home[];

  constructor(private homeService : HomeService,
    public alertController: AlertController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    this.myUKM = this.homeService.getAllMyUKM();
  }

  deleteUKM(id: string,slidingEl: IonItemSliding){
    slidingEl.close();
    this.myUKM = this.homeService.deleteMyUKM(id);
    this.deleteToast();
  }

  ionViewWillEnter(){
    this.myUKM = this.homeService.getAllMyUKM();
  }
  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Kamu telah berhasil menghapus UKM!',
      duration: 2000
    });
    toast.present();
  }


}
