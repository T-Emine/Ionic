import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { Categorie } from '../../app/categorie';
import { CategorieAddNewPage } from '../../pages/categorie-add-new/categorie-add-new';
import { CategorieDetailPage}  from '../../pages/categorie-detail/categorie-detail';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.html',
})
export class CategoriePage implements OnInit {
  cat: Categorie[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private categorieService:CategorieServiceProvider) { }

  ngOnInit() {
    //this.getCategorie();
  }

  getCategorie(): void {
    this.categorieService.getCategorie().subscribe(cat => this.cat = cat);
  }
 
  deleteCat(catDel: Categorie): void {
    this.cat = this.cat.filter(c => c !== catDel); //enleve la ligne
    this.categorieService.deleteCat(catDel).subscribe();
  }

  gotoAddCat(){
    this.navCtrl.push(CategorieAddNewPage);
  }
 
  goToDetail(items){
    this.navCtrl.push(CategorieDetailPage, {
      item: items
    });
  }
}
 
 