import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items'
import { ItemDetailsPage } from '../item-details/item-details'
import { DataProvider } from '../../providers/data/data'

/* Toast Message tst */
import { ToastController } from 'ionic-angular';

/* import for EditItem page */
import {EditItemsPage} from '../edit-items/edit-items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider,
    public toastMsg: ToastController) {

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


  trash(item){
    /* Removing item from array */
    this.items.splice(this.items.indexOf(item), 1)
    /* Updating modified array in local storage */
    this.data.save(this.items)

    /* Toast message for item deleted successfully */
    let toast = this.toastMsg.create({
      message: 'Item deleted succesfully' + item.title,
      duration: 3000,
      position: 'middle',
      cssClass: 'normalToast'
    });
    toast.present();
    
  }

  edit(item){
    // let toast = this.toastMsg.create({
    //   message: 'edit button worked succesfully' + item.title,
    //   duration: 3000,
    //   position: 'middle',
    //   cssClass: 'normalToast'
    // });
    // toast.present();

    let editModal = this.modalCtrl.create(EditItemsPage);
    editModal.onDidDismiss((Item) => {

      if (Item) {
        this.saveItem(Item);
      }

    });
    editModal.present();    
    

  }


}
