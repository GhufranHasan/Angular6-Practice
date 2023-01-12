import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [
    { name: 'Laptop' },
    { name: 'Mobile' },
    { name: 'Tablet' },
    { name: 'Television' },
    { name: 'Computer' },
    { name: 'Washing Machine' }
  ]

  statusOnline: boolean = true;
  userName: string = "UxTrendz"

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    })
   }

  ngOnInit(): void {
  }

}
