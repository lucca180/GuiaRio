import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';



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

  reviewForm: FormGroup;
  reviewFormActive = false;

  constructor(public formbuilder: FormBuilder, private navCtrl: NavController) { 
    this.reviewForm = this.formbuilder.group({
      comment: [null, null],
      recomended: ['', Validators.required],
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
  }

}
