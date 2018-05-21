import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotePage } from '../pages/note/note';
import { HttpClientModule } from '@angular/common/http';
import { NoteServiceProvider } from '../providers/note-service/note-service';
import { CategorieServiceProvider } from '../providers/categorie-service/categorie-service';
import { NoteDetailPage } from '../pages/note-detail/note-detail'
import { NoteAddNewPage } from '../pages/note-add-new/note-add-new'
import { CategoriePage } from '../pages/categorie/categorie'
import { CategorieAddNewPage } from '../pages/categorie-add-new/categorie-add-new'
import { CategorieDetailPage } from '../pages/categorie-detail/categorie-detail'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NotePage,
    NoteDetailPage,
    NoteAddNewPage,
    CategoriePage,
    CategorieAddNewPage,
    CategorieDetailPage
    //Rajouter tt les trucs de catégorie ici !!!
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NotePage,
    NoteDetailPage,
    NoteAddNewPage,
    CategoriePage,
    CategorieAddNewPage,
    CategorieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServiceProvider,
    CategorieServiceProvider
  ]
})
export class AppModule {}
