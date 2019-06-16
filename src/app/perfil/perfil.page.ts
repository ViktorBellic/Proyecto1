import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  username: string;
  anggota: any;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public storage: Storage
  ) { }

  ngOnInit() {
  }
ionViewWillEnter(){
    this.storage.get('session_storage').then((res) => {
      this.anggota = res;
      this.username = this.anggota.username;
      console.log(this.username);
    });
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
  goMiPerfil(){
    this.router.navigate(['/perfil']);
  }
  goMarketPlace(){
    this.router.navigate(['/marketplace']);
  }
  goEventos(){
    this.router.navigate(['/evento']);
  }
  goHome(){
    this.router.navigate(['/home']);
  }
}
