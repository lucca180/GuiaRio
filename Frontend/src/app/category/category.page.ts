import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  themeName: string = "defaultTheme";
  categoryName: string = "Todos os Lugares"

  constructor(private route: ActivatedRoute) { 
    let cat = this.route.snapshot.paramMap.get('id');
    switch(cat){
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

  ngOnInit() {
  }

}
