
import { Injectable } from '@angular/core';
import { MyuserComponent } from '../myuser/myuser.component';
import { Router } from '@angular/router';

var users = [
  new MyuserComponent('admin','admin'),
  new MyuserComponent('admin1','admin1')
];

@Injectable()
export class AuthenticateService {

  constructor(private _router: Router) { }

// Logout section

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }
//Login section 

  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      console.log(user);
      this._router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

//user credentials checking

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }
}