import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  faChevronLeft = faChevronLeft;
  faEdit = faEdit;

  userId: string;
  isOwner: boolean = false;
  editMode:boolean = false;

  userObj:any = {
    first_name: 'Carregando...',
    last_name: '',
    description: '',
    photo: '../../../assets/avatar_placeholder.png',
    is_guide: 0,
  }

  editForm: FormGroup;

  constructor(public router: Router, 
              private navCtrl: NavController, 
              private route: ActivatedRoute, 
              public users: UsersService,
              public formBuilder: FormBuilder,
              ) {
    
    this.editForm = this.formBuilder.group({
      first_name: [this.userObj.first_name, [Validators.required, Validators.minLength(3)]],
      last_name: [this.userObj.last_name, [Validators.required, Validators.minLength(3)]],
      description: [null],
      
    });
              }

  getUser(){
    this.users.getUser(this.userId).subscribe(res => {
      this.userObj = res;
      console.log(res);
      if(!res.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
      let userId = JSON.parse(localStorage.getItem("userData")).id;

      if(res.id === userId) this.isOwner = true;
    })
  }

  toggleEdit(){
    this.editMode = !this.editMode;
  }

  goBack(){
    if(this.editMode) return this.toggleEdit();
    this.navCtrl.back();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    
    if(!this.userId){
      let user = JSON.parse(localStorage.getItem("userData"));
      if(!user) return this.router.navigateByUrl("/pre-login");
      this.userObj = user;
      if(!user.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
      this.isOwner = true;
    }

    else this.getUser();
  }

}
