import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNotesComponent } from './add-notes/add-notes.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  columns: any = ['No', 'Title', 'Description', 'Action'];
  addNotes: any;
  constructor(private dialog: MatDialog) {}

  openAddNotes() {
    this.addNotes = this.dialog.open(AddNotesComponent, {
      width: '30%',
      
      data: {
       
      },
    });
  }
}
