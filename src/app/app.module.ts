import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {FormsModule} from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FireMessagesComponent} from './components/fire-messages/fire-messages.component';
import {FireMessagesService} from './providers/fire-messages.service';


@NgModule({
  declarations: [
    AppComponent,
    FireMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [FireMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
