import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html'
})

export class BuyoutPage implements OnInit{
    item: string;

    constructor(private navParams: NavParams, private navCtrl: NavController) {
    }

    ngOnInit() {
        this.item = this.navParams.get("itemName");
    }

    onGoToRoot() {
        this.navCtrl.popToRoot();
    }

}