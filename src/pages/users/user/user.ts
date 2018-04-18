import { Component, OnInit } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
    selector: "page-user",
    templateUrl: "user.html"
})

export class UserPage implements OnInit {
  
    name: string;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController
    ){}

    ngOnInit() {
        this.name = this.navParams.get("userName");
    }

    onGoBack() {
        // This below line would pop the top page
        // this.navCtrl.pop();
        this.navCtrl.popToRoot();
    }
}

