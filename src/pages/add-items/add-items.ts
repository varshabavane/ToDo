import { Component } from "@angular/core";
import { ViewController, NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-add-items",
  templateUrl: "add-items.html"
})
export class AddItemsPage {
  title: string;
  description: string;
  // month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  // date = new Date().getDate() +" - " +this.month[new Date().getMonth()] +" - "+ new Date().getFullYear()
  date: Date;
  time: String = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public View: ViewController
  ) {
    // this.time= new Date().getTime() + (new Date().getTimezoneOffset() * 60000)
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time
    };

    this.View.dismiss(newItem);
  }

  close() {
    this.View.dismiss();
  }
}
