import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  product = [
  { name: "Laptop", id: "001" },
  { name: "Mobile", id: "002" },
  { name: "Tablet", id: "003" },
  { name: "Computer", id: "004" },
  { name: "Television", id: "005" },
  { name: "Washing Machine", id: "006" }
]

  constructor() { }

  messageAlert(){
    // alert("Thanks for subscribe. We will get in touch with you shortly.");
    alert("Thanks for subscribe.");
}
}
