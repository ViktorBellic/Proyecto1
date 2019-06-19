import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import para redireccionar a otras paginas
import { PostProvider } from '../../providers/post-provider'; // Este import sirve para enviar datos a las API de base de datos
import { ToastController } from '@ionic/angular'; // Import para notificaciones
import { Storage } from '@ionic/storage'; // Este import es importante para almacenar los datos de un usuario

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  // Se crean los recursos a utilizar en el constructor
  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    public storage: Storage
  ) { }

  ngOnInit() {
  }

  // Si te encuentras con un metodo mas o menos asi es solo para rediccionmiento 
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
