import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registererForm!: FormGroup;
  isFormSubmitted:boolean=false
  constructor(public fromBuilder: FormBuilder,public sharedService:SharedService) {}

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.registererForm = this.fromBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobileNo: ['', [Validators.required,Validators.minLength(10)]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isFormSubmitted=true
  }
}
