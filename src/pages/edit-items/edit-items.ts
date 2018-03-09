import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";

@Component({
  selector: "page-edit-items",
  templateUrl: "edit-items.html"
})
export class EditItemsPage {
  title;
  description;
  date;
  time: String = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, -1);

    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController
  ) {}

  ionViewDidLoad() {
    this.title = this.navParams.get("item").title;
    this.description = this.navParams.get("item").description;
    this.date = this.navParams.get("item").date;
    this.time = this.navParams.get("item").time;
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }
}
