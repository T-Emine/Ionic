import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../app/note';
import { Categorie } from '../../app/categorie';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { CategorieServiceProvider } from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.html',
})
export class NoteDetailPage implements OnInit {

  noteInput: Note;
  tabCat : Categorie[];
  selectedItem : any;
  s:Date;

  constructor(
    private noteService: NoteServiceProvider,
    private categorieService: CategorieServiceProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) { this.noteInput = navParams.get('item'); }

  ngOnInit() {
   // this.getNoteDetail();
    this.getListCategorie();
  }

  getNoteDetail(): void {
     //this.noteService.getNoteID(this.selectedItem).subscribe(note => this.noteInput = note);
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
  saveNote(noteSave: Note): void {
    console.log(noteSave);
    this.noteService.saveNote(noteSave).subscribe();
    this.presentToast();
  }

  getListCategorie(): void {
    this.categorieService.getCategorie().subscribe(cat => this.tabCat = cat);;
  }

}
