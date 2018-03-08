import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemsPage } from '../add-items/add-items'
import { ItemDetailsPage } from '../item-details/item-details'
import { DataProvider } from '../../providers/data/data'

/* Toast Message tst */
import { ToastController } from 'ionic-angular';


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

  text() {
    // alert('Hellow Workd')
    let toast = this.toastMsg.create({
      message: 'sliding text button work succesfully',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  call(){
    let toast = this.toastMsg.create({
      message: 'sliding call button work succesfully',
      duration: 3000,
      position: 'middle'
    });
    toast.present();

  }

  mail(){
    let toast = this.toastMsg.create({
      message: 'sliding email button work succesfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
