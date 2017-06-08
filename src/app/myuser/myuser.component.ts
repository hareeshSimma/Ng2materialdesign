import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css']
})
export class MyuserComponent implements OnInit {

  constructor(public username: string, public password: string) { }

  ngOnInit() {
  }

}
