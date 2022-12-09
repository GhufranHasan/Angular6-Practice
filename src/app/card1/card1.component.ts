import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
// import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  product = "test";

  constructor(private _msgService: DesignutilityService) { }

  ngOnInit(): void {
    // this.product = this._msgService.product.name;
  }

  btnClick(){
    // const msgService = new MessageService();
    // msgService.messageAlert();
    this._msgService.messageAlert();
  }
}
