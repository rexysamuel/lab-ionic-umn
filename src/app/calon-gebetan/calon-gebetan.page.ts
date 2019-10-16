import { Component, OnInit } from '@angular/core';
import { gebetan } from '../calon-gebetan.model';
import { CalonGebetanService } from '../calon-gebetan.service';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-calon-gebetan',
  templateUrl: './calon-gebetan.page.html',
  styleUrls: ['./calon-gebetan.page.scss'],
})
export class CalonGebetanPage implements OnInit {
  loadedGebetan: gebetan[];

  constructor(
    private calonGebetanService: CalonGebetanService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    private splashScreen: SplashScreen
  ) { }

  ngOnInit() {
    // Splashscreen
    this.splashScreen.show();
    this.loadedGebetan = this.calonGebetanService.gebetan;
  }

  async loadingGebetan(gebetan: gebetan) {
    const loading = await this.loadingController.create({
      message: 'Dewa asmara sedang bekerja, silahkan tunggu...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.toastGebetan();
    this.calonGebetanService.setGebetan(gebetan);
  }

  async toastGebetan() {
    const toast = await this.toastController.create({
      message: 'Gebetan berhasil menjadi target anda!',
      duration: 2000,
      position: 'bottom',
      buttons: [{
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    toast.present();
  }

}
