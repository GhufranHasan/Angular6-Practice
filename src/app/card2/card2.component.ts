// import { MessageService } from '../appServices/message.service';
import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  product = "test";

  constructor(private _msgService: DesignutilityService) { }

  ngOnInit(): void {
    // this.product = this._msgService.product.name;
  }

  btnClick(){
    // const msgService = new MessageService;
    // msgService.messageAlert();
    this._msgService.messageAlert();
  }

}
