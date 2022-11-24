import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  dynName: string = "Ghufran Hasan";
  appStatus: boolean = true;
  status1 = "Online";
  status2 = "Offline";

  constructor() { }

  ngOnInit(): void {
  }

}
