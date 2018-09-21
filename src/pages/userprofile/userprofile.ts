import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {

 

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {

    

  }

  close(){
    this.viewCtrl.dismiss();
  }

 




}
