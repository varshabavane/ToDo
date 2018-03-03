import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-items',
  templateUrl: 'add-items.html',
})
export class AddItemsPage {
  title:string;
  description:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public View: ViewController) {
  }

  saveItem() {
  let newItem = {
    title: this.title,
    description: this.description
  };

  console.log('Add items'+JSON.stringify(newItem))
  this.View.dismiss(newItem)
  }

  close(){
    this.View.dismiss()
  }

}
