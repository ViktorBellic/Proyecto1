import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public storage: Storage
  ) { }

  ngOnInit() {
  }

  formRegister() {
    this.router.navigate(['/register']);
  }

  async prosesLogin(){
    if(this.username != "" && this.password != "" ){
      let body = {
        aksi: 'login',
        username: this.username,
        password: this.password,
      };
      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;

        if(data.success){
          
            this.storage.set('session_storage', data.result);

            this.router.navigate(['/home']);
            const toast = await this.toastCtrl.create({
            message: 'Inicio exitoso.',
            duration: 2000
          });

          toast.present();

        }else{
              const toast = await this.toastCtrl.create({
                message: alertmsg,
                duration: 2000
              });
              toast.present();
            }
      });

    }else{
           const toast = await this.toastCtrl.create({
           message: 'Nombre de Usuario o Contraseña invalidos',
           duration: 2000
        });
        toast.present();
    }
    this.username= "";
    this.password= "";
  }

}
