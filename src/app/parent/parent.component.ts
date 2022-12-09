import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  proSelected: boolean = false;
  selProduct!: string;
  addedProduct: any;
  myValue:string = "Ghufran";
  myText:string = "Jameel";

  constructor() { }

  ngOnInit(): void {
  }

  onSelectProduct(product: string){
    this.proSelected = true;
    this.selProduct = product;
  }

  onAddedProduct(proData: any){
    this.addedProduct = proData;
  }

  // onAddProduct(){
  //   this.addedProduct = this.selectedProduct;
  // }

}
