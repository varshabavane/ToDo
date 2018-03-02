import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.items = [
      
      {title:'hi', description: 'hello' },
      {title:'hello', description: 'hey' },
      {title:'hey', description: 'here you are' }
    ]
  }

  addItem(){
    alert("add Item works")
  }

  viewItem(item){
    alert("this is your Item" + JSON.stringify(item))
  }

}
