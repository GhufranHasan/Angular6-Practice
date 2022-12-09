import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    const msgService = new MessageService();
    msgService.messageAlert();
  }
}
