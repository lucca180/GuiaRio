import { Component } from '@angular/core';
import { faTree, faPizzaSlice, faUmbrellaBeach, faTheaterMasks, faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  faTree = faTree;
  faPizzaSlice = faPizzaSlice;
  faUmbrellaBeach = faUmbrellaBeach;
  faTheaterMasks = faTheaterMasks;
  faCloudSun = faCloudSun;  

  places = [
    {
      name: 'Corcovado',
      img: "https://i1.wp.com/diariodoturismo.com.br/wp-content/uploads/2016/01/Corcovado_1_16.jpeg"
    },
    {
      name: 'Pão de Açúcar',
      img: "https://cdn.panrotas.com.br/portal-panrotas-statics/media-files-cache/276055/26377319a8e9918ecf72cd4180f95514opcao1rev2cmyk/0,73,1280,764/670,400,0.42/0/default.jpg"
    },
    {
      name: 'Praia de Copacabana',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxuk2tOOYf2B3lKTmTkbz6G1La0k1rnDGUDbJIM5_uCjJ1PP_3"
    },
    {
      name: 'Maracanã',
      img: "https://ogimg.infoglobo.com.br/esportes/23531377-67c-b11/FT1086A/652/xMARACA.jpg.pagespeed.ic.AcpV3u1EPq.jpg"
    },

  ]

  constructor() {}

}
