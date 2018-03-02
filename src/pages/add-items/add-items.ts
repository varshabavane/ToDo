import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {
  title:string;
  descrption:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public View: ViewController) {
  }

  saveItem() {
  let newItem = {
    title: this.title,
    descrption: this.descrption
  };
  this.View.dismiss(newItem)
  }

  close(){
    this.View.dismiss()
  }

}
