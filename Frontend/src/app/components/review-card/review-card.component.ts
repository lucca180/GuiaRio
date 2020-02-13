import { Component, OnInit, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  
  @Input() reviewObj = {
    first_name: '',
    last_name: '',
    photo: '',
    is_guide: 0,
    pivot:{
      comment: '',
      rating: '',
    }
  };

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  
  constructor() { }

  ngOnInit() {}

}
