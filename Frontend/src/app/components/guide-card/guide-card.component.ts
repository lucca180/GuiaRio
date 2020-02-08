import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.scss'],
})
export class GuideCardComponent implements OnInit {

  guideInfo = {
    name: "Claudia Miranda",
    img: "https://i.imgur.com/v2suX6R.jpg",
    score: 4.9,
    bio: "Formada em Turismo com mestrado em História do Rio. Falo Espanhol intermediário e Inglês",
  }

  constructor() { }

  ngOnInit() {}

}
