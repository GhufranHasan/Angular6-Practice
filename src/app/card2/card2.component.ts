import { MessageService } from '../appServices/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    const msgService = new MessageService;
    msgService.messageAlert();
  }

}
