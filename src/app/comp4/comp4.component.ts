import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }

  userName!: string

  updateUserName(uname: { value: string; }) {
    // this.userName = uname.value
    this._designServices.userName.next(uname.value)
  }

}
