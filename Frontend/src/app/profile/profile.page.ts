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
  photoFile: File;

  userObj:any = {
    first_name: 'Carregando...',
    last_name: '',
    description: '',
    photo: '../../../assets/avatar_placeholder.png',
    is_guide: 0,
  }
 
  editForm: FormGroup;

  constructor(
    public router: Router, 
    private navCtrl: NavController, 
    private route: ActivatedRoute, 
    public users: UsersService,
    public formBuilder: FormBuilder,
    ){
    
      this.editForm = this.formBuilder.group({
        // photo: [this.userObj.photo],
        description: [''],
      });
    }
  
  changePhoto(photo){
    this.photoFile = photo[0];
    let reader = new FileReader();
    reader.onload = (file: any) => {
        this.userObj.photo = file.target.result;
    }
    reader.readAsDataURL(photo[0]);
  }

  updateUser(){
    let valuesObj = {
      ...this.editForm.value,
    }

    //if(this.photoFile) valuesObj.photo = this.photoFile;

    console.log(this.userId, valuesObj);

    this.users.updateUser(this.userId, valuesObj).subscribe(res=>{
      console.log(res);
      localStorage.setItem('userData', JSON.stringify(res[0]));
      this.userObj = res[0];
      this.editMode = false;
    })
  }

  getUser(){
    this.users.getUser(this.userId).subscribe(res => {
      this.userObj = res;
      console.log(res);
      //if(!res.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
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
      console.log("userData ", user)
      if(!user) return this.router.navigateByUrl("/pre-login");
      this.userObj = user;
      this.userId = user.id;
      //if(!user.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
      this.isOwner = true;
    }

    else this.getUser();
  }

}
