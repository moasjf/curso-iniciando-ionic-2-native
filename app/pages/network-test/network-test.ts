import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Network, Connection } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/network-test/network-test.html',
})
export class NetworkTestPage {
  connectionType: any;

  constructor(private nav: NavController) {}

  check(){
    this.connectionType = Network.connection;
    console.log('type:' + Network.connection);

    if(Network.connection == Connection.WIFI){
       console.log('Está no WIFI');
    }
  }
}
