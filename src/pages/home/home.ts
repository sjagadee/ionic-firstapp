import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usrsPage= UsersPage;

  constructor(public navCtrl: NavController) {
  }

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }

}
