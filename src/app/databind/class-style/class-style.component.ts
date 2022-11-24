import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  mypro: boolean = true;
  isActive: boolean = false;

  myStyle1: string = "15px";
  myStyle2: string = "5px";

  multiClass = {
    class1: true,
    class2: false,
    class3: true
  }

  multiStyle = {
    'background':'red',
    'border': '10px solid green'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
