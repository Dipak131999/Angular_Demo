import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent {
  notesForm!: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(public sharedService: SharedService, public fb: FormBuilder,public dialogRef: MatDialogRef<AddNotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any)  {}
  
  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.notesForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }

  addNotes() {
    this.isFormSubmitted = true;
  }
  
  hideModal() {}
}
