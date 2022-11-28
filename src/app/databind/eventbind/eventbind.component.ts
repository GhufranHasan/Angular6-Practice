import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  msg!: string;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddCart(){
  //   this.msg="Product Added in Cart";
  // }

  onAddCart(event: any){
    this.msg=event.target.value + " Added in Cart";
  }

  // onInputClick(event: any){
  //   console.log(event.target.value);
  // }

  getInputInfo(my: any){
    // console.log(my.name);
    console.log(my.value);
  }

}
