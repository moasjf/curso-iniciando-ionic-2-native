import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network, Connection } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/network-test/network-test.html',
})
export class NetworkTestPage {
  connectionType: any;

  constructor(private nav: NavController) {

    let connectSubscription = Network.onConnect().subscribe(() => {
      console.log('network connected!'); 
      // We just got a connection but we need to wait briefly
      // before we determine the connection type.  Might need to wait 
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (Network.connection === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });

  }

  check(){
    this.connectionType = Network.connection;

    console.log('Está no '+Network.connection);

    if(Network.connection == Connection.WIFI){
       console.log('Está no WIFI');
    }

    if(Network.connection == Connection.NONE){
       console.log('Está no SEM coneccao');
    }
  }
}
