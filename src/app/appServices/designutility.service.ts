import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

//   product = [
//   { name: "Laptop", id: "001" },
//   { name: "Mobile", id: "002" },
//   { name: "Tablet", id: "003" },
//   { name: "Computer", id: "004" },
//   { name: "Television", id: "005" },
//   { name: "Washing Machine", id: "006" }
// ]

url = 'https://jsonplaceholder.typicode.com/users';
product(): Observable<any> {
  return this.http.get(this.url)
}

  constructor(private http: HttpClient) { }

  messageAlert(){
    // alert("Thanks for subscribe. We will get in touch with you shortly.");
    alert("Thanks for subscribe.");
}
}
