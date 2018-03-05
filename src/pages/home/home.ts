import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items'
import { ItemDetailsPage } from '../item-details/item-details'
import {DataProvider} from '../../providers/data/data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemsPage);
    addModal.onDidDismiss((Item) => {

      if (Item) {
        this.saveItem(Item);
      }

    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item)
  }


  viewItem(item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
