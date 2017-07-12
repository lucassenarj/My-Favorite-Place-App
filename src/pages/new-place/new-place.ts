import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";
import { Geolocation } from '@ionic-native/geolocation';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(private placesService: PlacesService, private navCtrl: NavController, private navParams: NavParams, public geolocation: Geolocation) {
  }

  onAddPlace(value: {title: string; date: string; comments: string}){
    this.placesService.addPlace({title: value.title, date: new Date().toISOString(), comments: value.comments, location: this.location});
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
        this.geolocation.getCurrentPosition().then(
            (location) => {

                this.location.lat = location.coords.latitude;
                this.location.lng = location.coords.longitude;
            }
        )
        .catch(
            (error) => console.log('An error occurred')
        );
    }

    onLocateUser(){
        this.geolocation.getCurrentPosition().then(

            (location) => {
              //console.log(location);
              this.location.lat = location.coords.latitude;
              this.location.lng = location.coords.longitude;
            }
        )
        .catch(
            (error) => console.log('An error occurred')
        );
    }

}
