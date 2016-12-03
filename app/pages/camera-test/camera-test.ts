import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/camera-test/camera-test.html',
})
export class CameraTestPage {
   image: any;
   //, public Camera: Camera
  constructor(private nav: NavController) {}

  takePhoto() : void {
    //opcoes possiveis: https://github.com/apache/cordova-plugin-camera#module_camera.getPicture

    Camera.getPicture({
      quality: 100,
      cameraDirection: Camera.Direction.FRONT,
      destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;

    }, (err) => {
       console.log('Erro Camera:'+ err);
    });
  }
}
