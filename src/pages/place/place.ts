import { Component } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;
  place: string;

  constructor(
      private viewCtrl: ViewController,
      private navParams: NavParams) {
        this.lat = this.navParams.data.location.lat;
        this.lng = this.navParams.data.location.lng;
        this.place = this.navParams.data.title;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }

}
