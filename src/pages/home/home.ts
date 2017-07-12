import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { NewPlacePage } from  '../new-place/new-place';
import { PlacePage } from  '../place/place';
import { PlacesService } from "../../services/places.service";
import { Storage } from '@ionic/storage';
import { Place } from "../../model/place.model";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string; date: string; comments: string}[] = [];

  constructor(
      public navCtrl: NavController,
      private placesService: PlacesService,
      private storage: Storage,
      private modalCtrl: ModalController) {

  }

  ionViewWillEnter(){
    this.placesService.getPlaces().then(
        (places) => this.places = places
    )
  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlacePage);
  }

  onOpenPlace(place: Place){
    this.modalCtrl.create(PlacePage, place).present();
  }

  onAboutPage(){
    this.navCtrl.push(AboutPage);
  }

}
