import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
