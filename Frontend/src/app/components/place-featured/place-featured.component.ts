import { Component, OnInit, Input} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-featured',
  templateUrl: './place-featured.component.html',
  styleUrls: ['./place-featured.component.scss'],
})
export class PlaceFeaturedComponent implements OnInit {
  
  @Input() placeObj:any = {
  }
  
  // placeObj = {
  //   name: "Corcovado",
  //   img: "https://i1.wp.com/diariodoturismo.com.br/wp-content/uploads/2016/01/Corcovado_1_16.jpeg"
  // }

  placeholder = "";

  constructor(public navCtrl: NavController) {}

  goTo(){
    this.navCtrl.navigateForward('/place/'+this.placeObj.id)

  }

  ngOnInit() {
    if(!this.placeObj.photo){
      this.placeObj.photo = "../../../assets/logo.svg"

      switch(this.placeObj.category){
        case 1:
          this.placeholder = "placeHolder nature";
          break;
        case 2:
          this.placeholder = "placeHolder food";
          break;
        case 3:
          this.placeholder = "placeHolder beach";
          break;
        case 4:
          this.placeholder = "placeHolder culture";
          break;
        default:
          this.placeholder = "placeHolder"
      }


    }

  }

}
