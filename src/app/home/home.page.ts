import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  anggota: any;
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public storage: Storage
  ) { }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
      
    });
  }

  goMiPerfil(){
    this.router.navigate(['/perfil']);
  }

  goMarketPlace(){
    this.router.navigate(['/marketplace']);
  }
  goEventos(){
    this.router.navigate(['/evento']);
  }
  openChat(){
    this.router.navigate(['/chat']);
  }

  

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
      message: 'Sesión Cerrada',
      duration: 2000
    });
    toast.present();

  }

  

}
