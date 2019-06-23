import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService, chat} from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';
import { ActionSheetController } from '@ionic/angular';
// import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public chatRooms: any = [];
  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
   // public home: HomePage,
    public chatservice: ChatsService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.chatservice.getChatRooms().subscribe( chats => {
      this.chatRooms = chats;
  })
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  openChat(chat){
    this.modal.create({
      component: ChatComponent,
      componentProps : {
      chat : chat
      }
    }).then( (modal) => modal.present())
  }
  /*async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.home.prosesLogout();
        }
      }]
    });
    await actionSheet.present();
  }*/

}

