import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  submit() {
  }
}
  // IMPORTE DE CAMERA

  // import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

  //fUNÇÕES DA CAMERA

  // openCamera() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   };

  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       console.log('data:image/jpeg;base64,' + imageData);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // myPhoto;
  // openGallery() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     saveToPhotoAlbum: false
  //   };

  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  //       console.log('data:image/jpeg;base64,' + imageData);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

