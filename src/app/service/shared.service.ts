import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(public router: Router,private toastr: ToastrService) {}

  gotoPage(url: any) {
    this.router.navigate([url]);
  }
  getFormControls(formGroupName: FormGroup) {
    return formGroupName.controls;
  }

  successToast(message: any, title?: any) {
    return this.toastr.success(message, title);
  }

  errorToast(message: any, title?: any) {
    return this.toastr.error(message, title);
  }

  warningToast(message: any, title?: any) {
    return this.toastr.warning(message, title);
  }

  infoToast(message: any, title?: any) {
    return this.toastr.info(message, title);
  }
}
