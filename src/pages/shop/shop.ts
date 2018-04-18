import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToBuyout(productData: {item: string, quantity: number}) {
    this.navCtrl.push(BuyoutPage, productData);
  }

}
