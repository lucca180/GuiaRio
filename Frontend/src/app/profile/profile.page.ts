import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt, faCheck, faHeart} from '@fortawesome/free-solid-svg-icons';
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

  userId: string;
  
  userObj = {
    first_name: '',
    last_name: '',
    description: '',
    photo: '',
    is_guide: 0,
  }


  constructor(private navCtrl: NavController, private route: ActivatedRoute, public users: UsersService) { }

  getUser(){
    this.users.getUser(this.userId).subscribe(res => {
      this.userObj = res;
      if(!res.photo) this.userObj.photo = '../../../assets/avatar_placeholder.png';
    })
  }

  goBack(){
    this.navCtrl.back();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUser();
  }

}
