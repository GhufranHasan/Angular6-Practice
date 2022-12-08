import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() placeholderText:string = "abc";

  @Input() productSelected: boolean = false;
  @Input() selectedProduct!: string;
  @Input() addedProduct: any;

  onAddProduct(){
    this.addedProduct = this.selectedProduct;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
