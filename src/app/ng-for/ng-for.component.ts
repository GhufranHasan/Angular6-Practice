import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  products = [
    { prodImg: 'https://toppng.com/public/uploads/preview/samsung-laptop-png-11552846920ggjwoxjcy6.png', prodName: 'Laptop', prodID: 'pro01', prodPrice: 25000},
    { prodImg: 'https://toppng.com/public/uploads/preview/old-tv-11527929192bv675k3v92.png', prodName: 'TV', prodID: 'pro02', prodPrice: 8000},
    { prodImg: 'https://toppng.com/public/uploads/preview/mobile-phone-with-touch-11530981521hmtyabwrsn.png', prodName: 'Mobile', prodID: 'pro03', prodPrice: 12000},
    { prodImg: 'https://toppng.com/public/uploads/preview/tablet-115239557320fvu2kym4e.png', prodName: 'Tablet', prodID: 'pro04', prodPrice: 15000},
    { prodImg: 'https://toppng.com/public/uploads/preview/washing-machine-11530971968yoms20dosd.png', prodName: 'Washing Machine', prodID: 'pro05', prodPrice: 10000},
    { prodImg: 'https://toppng.com/public/uploads/preview/computer-desktop-11530975870kapnlhkoxb.png', prodName: 'Computer', prodID: 'pro06', prodPrice: 50000}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
