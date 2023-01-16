import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { Comp2Component } from './../comp2/comp2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  // products = [
  //   { name: 'Laptop' },
  //   { name: 'Mobile' },
  //   { name: 'Tablet' },
  //   { name: 'Television' },
  //   { name: 'Computer' },
  //   { name: 'Washing Machine' }
  // ]

  // statusOnline: boolean = true;
  userName: string = "Ghufran"

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe(uname => {
  //     this.userName = uname
  //   })
  //  }

  @ViewChild('box') box!: ElementRef
  @ViewChild(Comp2Component) child!: Comp2Component 

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.box)
  }

  ngAfterViewInit(): void {
    // console.log(this.box)
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red')
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white')
    this.renderer.addClass(this.box.nativeElement, 'myClass')
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'this is test title')
    // this.box.nativeElement.style.backgroundColor = "blue"
    // this.box.nativeElement.classList = "boxBlue"
    // this.box.nativeElement.innerHTML = "This is modified HTML"
    console.log(this.child)
  }

  changeChildProperty() {
    this.child.userName = "UxTrendz"
  }

  callChildMethod() {
    this.child.clickMe();
  }

}
