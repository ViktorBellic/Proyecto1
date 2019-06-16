import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goMarketPlace(){
    this.router.navigate(['/marketplace']);
  }
  goHome(){
    this.router.navigate(['/home']);
  }
  goEventos(){
    this.router.navigate(['/evento']);
  }
}
