import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Categorie } from '../../app/categorie';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.html',
})

export class CategorieDetailPage implements OnInit {
  @Input() catInput: Categorie;
  selectedItem : any;

  constructor(
    private categorieService: CategorieServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) { this.selectedItem = navParams.get('item'); }

  ngOnInit() {
    this.getCatDetail();
  }

  getCatDetail(): void {
    this.categorieService.getCategorieID(this.selectedItem).subscribe(cat => this.catInput = cat);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Modifié avec succès !',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  //PUT chercher bd+save
  saveCat(catSave: Categorie) : void {
    console.log(catSave);
    this.categorieService.saveCat(catSave).subscribe();
    this.presentToast();
  }

}
