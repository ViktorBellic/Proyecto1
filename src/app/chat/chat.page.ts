import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatsService, chat} from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public chatRooms: any = [];
  constructor(
    private router: Router,
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
}
