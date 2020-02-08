import { Component, OnInit, Input} from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
