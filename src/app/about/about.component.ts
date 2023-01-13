import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value!:string;
  comp1Exist: boolean = true;

  submitValue(val: { value: string; }){
    this.value = val.value
  }

  destroy(){
    this.comp1Exist = false;
  }

}
