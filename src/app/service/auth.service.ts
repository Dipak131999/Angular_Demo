import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService, public router: Router) { }


  isLoggedIn(){
    if (localStorage.getItem('userDetails')) {
      return true;
    }
    return false;
  }
}
