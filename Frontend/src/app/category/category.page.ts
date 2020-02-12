import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  themeName: string = "defaultTheme";
  categoryName: string = "Todos os Lugares"
  catId: any;

  placesArr = [];
  loading:boolean = true;

  constructor(public places: PlacesService, private route: ActivatedRoute) { 
    this.catId = this.route.snapshot.paramMap.get('id');
    switch(this.catId){
      case '1':
        this.themeName = "natureTheme";
        this.categoryName = "Natureza";
        break;
      case '2':
        this.themeName = "foodTheme";
        this.categoryName = "Comida";
        break;
      case '3':
        this.themeName = "beachTheme";
        this.categoryName = "Praias";
        break;
      case '4':
        this.themeName = "cultureTheme";
        this.categoryName = "Cultura";
        break;
      default:
        this.themeName = "defaultTheme";
        break;
    }
  }

  getPlaces(){
    this.places.listPlaces().subscribe(res => {
      this.loading = false;
      this.placesArr = res.filter(x => x.category == this.catId);
    })
  }

  ngOnInit() {
    this.getPlaces();
  }

}
