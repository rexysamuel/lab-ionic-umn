import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Home } from '../home.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ukm-home',
  templateUrl: './ukm-home.page.html',
  styleUrls: ['./ukm-home.page.scss'],
})
export class UkmHomePage implements OnInit {
  loadedHome: Home[];

  constructor(
    private homeService: HomeService,
    public alertController: AlertController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    this.loadedHome = this.homeService.getAllhome();
  }

  async confirmAlert(home:Home) {
    const alert = await this.alertController.create({
      header: 'Beneran mau join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.cancelToast();
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.seriusToast();
            this.homeService.setMyUKM(home);
          }
        }
      ]
    });
    await alert.present();
  }

  async cancelToast() {
    const toast = await this.toastController.create({
      message: 'Kamu telah membatalkan pendaftaran UKM!',
      duration: 2000
    });
    toast.present();
  }

  async seriusToast() {
    const toast = await this.toastController.create({
      message: 'Kamu telah berhasil mendaftarkan UKM!',
      duration: 2000
    });
    toast.present();
  }

}
