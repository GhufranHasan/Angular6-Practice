import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe(uname => {
  //     this.userName = uname
  //   })
  //  }

  @Input() myValue = "UxTrendz"
  counter!: any;
  num: number = 1;

   constructor() {
    console.log("constructor called")
   }

  ngOnInit(): void {
    this.counter = setInterval(() => {
      this.num = this.num + 1
      console.log(this.num)
    }, 1000)
    console.log("ngOnInit called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges called")
    console.log("ngOnChanges called" + " " + changes['myValue'].currentValue)
    // console.log(changes)
    // console.log(changes['myValue'].currentValue)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")    
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
    clearInterval(this.counter)
  }

  // userName!: string

  // updateUserName(uname: { value: string; }) {
  //   // this.userName = uname.value
  //   this._designServices.userName.next(uname.value)
  // }
}
