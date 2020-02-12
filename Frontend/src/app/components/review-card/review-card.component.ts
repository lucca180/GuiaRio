import { Component, OnInit } from '@angular/core';
import { faThumbsUp, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {

  faThumbsUp = faThumbsUp;

  constructor() { }

  ngOnInit() {}

}
