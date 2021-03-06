import { Component, OnInit, Input} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.scss'],
})
export class GuideCardComponent implements OnInit {

  // guideInfo = {
  //   name: "Claudia Miranda",
  //   img: "https://i.imgur.com/v2suX6R.jpg",
  //   score: 4.9,
  //   bio: "Formada em Turismo com mestrado em História do Rio. Falo Espanhol intermediário e Inglês",
  // }

  @Input() guideObj = {
    id: 0,
    first_name: "",
    last_name: "",
    photo: "",
    description: "",
  }

  constructor(private navCtrl: NavController) { }

  goToProfile(){
    this.navCtrl.navigateForward('/profile/'+this.guideObj.id)
  }

  ngOnInit() {
    if(!this.guideObj.photo) this.guideObj.photo = '../../../assets/avatar_placeholder.png';
  }

}
