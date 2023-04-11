import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
[x: string]: any;
  loginForm!: FormGroup;
  isFormSubmitted:boolean=false
  constructor(public fromBuilder: FormBuilder,public sharedService:SharedService) {}

  ngOnInit(): void {
    this.initForm()
  }
  
  initForm() {
    this.loginForm = this.fromBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }
}
