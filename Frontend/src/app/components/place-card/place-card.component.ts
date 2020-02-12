import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss'],
})
export class PlaceCardComponent implements OnInit {

  @Input() placeObj = {
    name: "Corcovado",
    photo: "",
    address: "Av. Atlântica",
    description: "etc etc e tal"
  }

  constructor() { }

  ngOnInit() {}

}
