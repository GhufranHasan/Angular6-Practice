import { Component, ContentChild, ElementRef, OnInit, AfterContentInit, Renderer2 } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterContentInit {

  // constructor(private _designServices: DesignutilityService) {
  //   this._designServices.userName.subscribe(uname => {
  //     this.userName = uname
  //   })
  // }
  userName: string = "Default Value";

  @ContentChild('childCon') childParagraph!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.childParagraph)
  }
  
  ngAfterContentInit(): void {
    console.log(this.childParagraph)
    this.renderer.setStyle(this.childParagraph.nativeElement, 'color', 'red')
  }

  clickMe() {
    alert(this.userName)
    var text =  this.renderer.createText('this text s created by renderer')
    this.renderer.appendChild(this.childParagraph.nativeElement, text)
  }


  // updateUserName(uname: { value: string; }) {
  //   // this.userName = uname.value
  //   this._designServices.userName.next(uname.value)
}