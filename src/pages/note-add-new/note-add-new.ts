import { Component, OnInit } from '@angular/core';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../app/note';
import { Categorie } from '../../app/categorie';
import { CategorieServiceProvider }  from '../../providers/categorie-service/categorie-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-note-add-new',
  templateUrl: './note-add-new.html',
})


export class NoteAddNewPage implements OnInit {
  noteAddInput: Note;
  tabCat : Categorie[];
  s:Date;

  constructor(
    private categorieService: CategorieServiceProvider,
    private noteService: NoteServiceProvider,
    public toastCtrl: ToastController
  ) { this.noteAddInput = new Note() }

  ngOnInit() {
    this.getListCategorie();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Ajouté avec succès !',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }


  addNote(name: Note): void {
    name.contenu = '<?xml version="1.0" encoding="UTF-8"?> <contenu>'+name.contenu+'</contenu>';
    this.noteService.addNote(name).subscribe();
    this.presentToast();
  }

  getListCategorie(): void {
    this.categorieService.getCategorie().subscribe(cat => this.tabCat = cat);;
  }

}

