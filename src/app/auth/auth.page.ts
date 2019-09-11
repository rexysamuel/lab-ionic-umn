import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
    this.loginToast();
  }

  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Login Successful!',
      duration: 2000
    });
    toast.present();
  }

}
