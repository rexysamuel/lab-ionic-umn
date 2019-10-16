import { Component, OnInit } from '@angular/core';
import { gebetan } from '../calon-gebetan.model';
import { CalonGebetanService } from '../calon-gebetan.service';
import { ToastController, AlertController, IonItemSliding, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-target-gebetan',
  templateUrl: './target-gebetan.page.html',
  styleUrls: ['./target-gebetan.page.scss'],
})
export class TargetGebetanPage implements OnInit {
  myGebetan: gebetan[];

  constructor(
    private CalonGebetanService: CalonGebetanService,
    public alertController: AlertController,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.myGebetan = this.CalonGebetanService.getAllGebetan();
  }

  ionViewWillEnter() {
    this.myGebetan = this.CalonGebetanService.getAllGebetan();
  }

  async presentActionSheet(id: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Yakin gak gebet dia lagi?',
      buttons: [{
        text: 'Yakin, hapus aja dari daftar',
        handler: () => {
          this.myGebetan = this.CalonGebetanService.deleteGebetan(id);
          this.deleteToast();
        }
      }, {
        text: 'Gak yakin, kembali aja deh',
        role: 'cancel',
        handler: () => {
          this.batalToast();
        }
      }]
    });
    await actionSheet.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Kamu telah berhasil menghapus gebetan dari hidupmu!',
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

  async batalToast() {
    const toast = await this.toastController.create({
      message: 'Kamu belum bisa move on :(',
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
