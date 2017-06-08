import { Component, OnInit } from '@angular/core';
import { MyuserComponent } from '../myuser/myuser.component';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new MyuserComponent('','');
  public errorMsg = '';

  constructor(private _service:AuthenticateService) { }

  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }

  ngOnInit() {
  }

}
