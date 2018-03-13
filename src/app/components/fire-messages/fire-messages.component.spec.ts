import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireMessagesComponent } from './fire-messages.component';

describe('FireMessagesComponent', () => {
  let component: FireMessagesComponent;
  let fixture: ComponentFixture<FireMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
