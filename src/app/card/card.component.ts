import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:any;

  constructor(private _msgService: DesignutilityService) { }

  ngOnInit(): void {
    this.products = this._msgService.product
  }

  btnClick(){
    this._msgService.messageAlert();
  }

}
