import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import { Note } from '../../app/note';
import { NoteAddNewPage } from '../../pages/note-add-new/note-add-new'
import { NoteDetailPage } from '../../pages/note-detail/note-detail';


@Component({
  selector: 'app-note',
  templateUrl: 'note.html',
})
export class NotePage implements OnInit{
  note: Note[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService:NoteServiceProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  ngOnInit() {
    //this.getNote();
  }
 
  getNote(): void {
    this.noteService.getNote().subscribe(note => this.note = note);
  }
 
  deleteNote(note: Note): void {
    this.note = this.note.filter(n => n !== note);  
    this.noteService.deleteNote(note).subscribe();
  }

  goToDetail(items) {
    this.navCtrl.push(NoteDetailPage, {
      item: items
    });
  }

  gotoAddNote(){
    this.navCtrl.push(NoteAddNewPage);
  }
}


