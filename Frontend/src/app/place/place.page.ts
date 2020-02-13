import { Component, OnInit } from '@angular/core';

import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from  '../services/users.service';
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
  user: any;
  loading:boolean = true;
  placeScore = '100';

  placeObj = {
    name: '',
    address: '',
    site: '',
    photo: '',
    category: 1,
  };

  reviewArr = [];

  reviewForm: FormGroup;
  reviewFormActive = false;

  constructor(
    public formbuilder: FormBuilder, 
    public places: PlacesService, 
    private navCtrl: NavController, 
    private route: ActivatedRoute,
    public users: UsersService,) { 

      this.reviewForm = this.formbuilder.group({
        comment: [null],
        rating: ['', Validators.required],
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

      if(!this.user) this.loading = false;
    })
  }

  goBack(){
    if(this.reviewFormActive) this.toggleForm();
    else this.navCtrl.back();
  }

  fabClick(reviewForm){
    if(!this.user) return this.navCtrl.navigateForward("/pre-login");

    if(this.reviewFormActive){
      this.submitForm(reviewForm);
      
    }

    else this.toggleForm();
  }

  toggleForm(){
    this.reviewFormActive = !this.reviewFormActive;
  }

  submitForm(reviewForm) {
    console.log(reviewForm.value);
    
    this.users.createComment({...reviewForm.value, place_id: this.placeId}, this.user.id).subscribe((res) => {
        console.log(res)
        this.getComments();
        this.toggleForm();
    });
  }

  getComments(){
    this.places.getRatings(this.placeId).subscribe(res=>{
      console.log(res);
      this.reviewArr = res;
      this.countScore();
    })
  }

  countScore(){
    let total = this.reviewArr.length;
    let positive = 0;
    
    if(total == 0) return;

    for(let review of this.reviewArr)
      if(review.pivot.rating) positive += 1;
    
    this.placeScore = ((positive / total) * 100).toFixed(0);
    
  }

  toggleFavorite(){
    if(!this.user) return this.navCtrl.navigateForward("/pre-login");
    
    if(this.faHeart === farHeart) { // NÃO FAVORITADO
      this.faHeart = faHeart;
      this.users.addFavorite(this.user.id, this.placeId).subscribe(res => console.log(res)); 
    }
    
    else { // FAVORITADO
      this.faHeart = farHeart;
      this.users.removeFavorite(this.user.id, this.placeId).subscribe(res => console.log(res));
    }
  }

  checkFavorite(){
    this.users.getFavorites(this.user.id).subscribe(res => {
      let fav = res.filter(x => x.id == this.placeId);
      //console.log(res, fav);
      if(fav.length == 1) this.faHeart = faHeart;
      this.loading = false;
    })
  }

  ngOnInit() {
    this.placeId = this.route.snapshot.paramMap.get('id');
    this.getPlace();

    this.user = JSON.parse(localStorage.getItem("userData"));
    if(this.user) this.checkFavorite();

    this.getComments();
  }

}