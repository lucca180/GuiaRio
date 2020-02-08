import { Component, OnInit } from '@angular/core';

import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-place-page',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})


export class PlacePage implements OnInit {
  
  faThumbsUp = faThumbsUp;
  faChevronLeft = faChevronLeft;
  faMapMarkerAlt = faMapMarkerAlt;
  faInfoCircle = faInfoCircle;
  faHeart = farHeart;
  faCommentAlt = faCommentAlt;
  faCheck = faCheck;  

  themeName = "defaultTheme";

  placeId: string;
  
  placeObj = {
    name: '',
    address: '',
    site: '',
    photo: '',
    category: 1,
  };

  reviewForm: FormGroup;
  reviewFormActive = false;

  constructor(public formbuilder: FormBuilder, public places: PlacesService, private navCtrl: NavController, private route: ActivatedRoute) { 
    this.reviewForm = this.formbuilder.group({
      comment: [null, null],
      recomended: ['', Validators.required],
    })
  }

  getPlace(){
    this.places.getPlace(this.placeId).subscribe(res => {
      this.placeObj = res[0];
      
      switch(res[0].category){
        case 1:
          this.themeName = "natureTheme";
          break;
        case 2:
          this.themeName = "foodTheme";
          break;
        case 3:
          this.themeName = "beachTheme";
          break;
        case 4:
          this.themeName = "cultureTheme";
          break;
        default:
          this.themeName = "defaultTheme";
          break;
      }
    })
  }

  goBack(){
    if(this.reviewFormActive) this.toggleForm();
    else this.navCtrl.back();
  }

  fabClick(form){
    if(this.reviewFormActive){
      this.submitForm(form);
    }

    this.toggleForm();
  }

  toggleForm(){
    this.reviewFormActive = !this.reviewFormActive;
  }

  submitForm(form) {
    console.log(form);
  }

  toggleFavorite(){
    if(this.faHeart === farHeart) this.faHeart = faHeart;
    else this.faHeart = farHeart;
  }

  ngOnInit() {
    this.placeId = this.route.snapshot.paramMap.get('id');
    this.getPlace();
  }

}
