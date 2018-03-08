import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items'
import { ItemDetailsPage } from '../item-details/item-details'
import { DataProvider } from '../../providers/data/data'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public data: DataProvider) {
    this.data.getData().then((todos) => {
      if (todos) {
        this.items = todos;
      }
    })

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
    this.data.save(this.items)
  }


  viewItem(item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
