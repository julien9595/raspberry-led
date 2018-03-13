import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FireMessagesService {

  constructor(private firebase: AngularFireDatabase) {

  }

  getMessages$(): Observable<any> {
    return this.firebase.list('/messages/0038CB2D').snapshotChanges()
      .map(objs => {
        console.log(objs);
        // return objs.map(obj => {
        // const msg: Message = {'id': obj.key};
        // return msg;
        // });
      });
  }

}
