import {Component, OnInit} from '@angular/core';
import {FireMessagesService} from '../../providers/fire-messages.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-fire-messages',
  templateUrl: './fire-messages.component.html',
  styleUrls: ['./fire-messages.component.css']
})
export class FireMessagesComponent implements OnInit {

  messages$: Observable<any>;

  constructor(private messagesService: FireMessagesService) {
  }

  ngOnInit() {
    this.messages$ = this.messagesService.getMessages$();
  }

}
