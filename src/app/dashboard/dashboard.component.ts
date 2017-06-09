import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// sample json object

data= [
    {
      "id": "X999_Y999",
      "from": {
        "name": "Hareesh", "id": "X12"
      },
      "message": "Looking forward to 2018!",
      
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-09-02T21:27:44+0000"
    },
    {
      "id": "X999_Y977",
      "from": {
        "name": "Ashok", "id": "X13"
      },
      "message": "How are you guys !",
      
      "type": "status",
      "created_time": "2010-05-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X999_Y89",
      "from": {
        "name": "Tanuja", "id": "X12"
      },
      "message": "I Love my self :-----",
      
      "type": "status",
      "created_time": "2010-08-04T21:27:24+0000",
      "updated_time": "2011-08-02T21:27:44+0000"
    },
    {
      "id": "X998_Y998",
      "from": {
        "name": "Sairam", "id": "X18"
      },
      "message": "Where's my contract?",
      
      "type": "status",
      "created_time": "2011-08-02T21:28:45+0000",
      "updated_time": "2011-09-02T28:27:44+0000"
    }
  ];

  
  constructor(private _service:AuthenticateService) { }

  ngOnInit() {
    this._service.checkCredentials();
    this.loadProfiles();
  }

  loadProfiles(){
    for (var sd in this.data) {
      var a= this.data[0];
      console.log(a)
    }
    
   }

  logout():void {
    this._service.logout();
  }
}