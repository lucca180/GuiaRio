import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faThumbsUp, faMapMarkerAlt, faInfoCircle, faCommentAlt} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.page.html',
  styleUrls: ['./place-page.page.scss'],
})


export class PlacePagePage implements OnInit {

  faThumbsUp = faThumbsUp;
  faChevronLeft = faChevronLeft;
  faMapMarkerAlt = faMapMarkerAlt;
  faInfoCircle = faInfoCircle;
  faHeart = faHeart;
  faCommentAlt = faCommentAlt;

  constructor() { }

  ngOnInit() {
  }

}
