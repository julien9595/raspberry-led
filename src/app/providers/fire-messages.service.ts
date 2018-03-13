import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FireMessagesService {

  constructor(private firebase: AngularFireDatabase) {

  }

  getMessages$(): Observable<any> {
    return this.firebase.list('/messages/1').snapshotChanges()
      .map(objs => {
        return objs.map(obj => { // Peiut etre un tableau de Messages
          console.log(obj);
          const msg: Message = {
            'id': '',
            'time': '',
            'lat': '',
            'lng': '',
            'data': '',
          };
          return msg;
        });
      });
  }

}
