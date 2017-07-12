import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesService } from "../../services/places.service";
import { Geolocation } from 'ionic-native';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(private placesService: PlacesService, private navCtrl: NavController, private navParams: NavParams) {
  }

  onAddPlace(value: {title: string; date: string; comments: string}){
    this.placesService.addPlace({title: value.title, date: new Date().toISOString(), comments: 'Um lugar maneiro', location: this.location});
    this.navCtrl.pop();
  }

    ionViewDidLoad() {
        Geolocation.getCurrentPosition().then(
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
    Geolocation.getCurrentPosition()
        .then(
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
