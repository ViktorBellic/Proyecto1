import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {

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
