import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Raspberry led';

  isOn$: Observable<any>;
  isLedOn = false;

  constructor(public firebase: AngularFireDatabase) {

  }

  ledIt() {
    this.firebase.database.ref('/led/white')
      .update({isOn: !this.isLedOn});
  }

  ngOnInit() {
    this.isOn$ = this.firebase.list('/led/white').snapshotChanges()
      .map(res => res.map(obj => {
          if (obj.key === 'isOn') {
            this.isLedOn = obj.payload.val();
          }
          return null;
        })
      );
  }
}
