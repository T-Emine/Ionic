import { Component, OnInit} from '@angular/core';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-categorie-add-new',
  templateUrl: './categorie-add-new.html',
})
export class CategorieAddNewPage implements OnInit {
  catAddInput: string; //car api rest ne crée que le libelle id générer automatiquement

  constructor(    
    private categorieService: CategorieServiceProvider,
    public toastCtrl: ToastController
  ){}

  ngOnInit() {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Ajouté avec succès !',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  addCat(name: string): void {
    console.log(name);
    this.categorieService.addCat(name).subscribe();
    this.presentToast();
  }
}
