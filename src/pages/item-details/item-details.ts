import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',

})
export class ItemDetailsPage {
  title;
  description;
  date;
  time;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.date = this.navParams.get('item').date;
    this.time=this.navParams.get('item').time
  }

}
