import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { APIURL } from '../global/constant';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private commonService: CommonService) {}

  addNotes(data: any) {
    this.commonService.post(`${APIURL.addNotes}`, data);
  }

  editNotes(data: any) {
    this.commonService.post(`${APIURL.editNotes}`, data);
  }

  deleteNotes(id: any) {
    this.commonService.delete(`${APIURL.deleteNotes}/${id}`);
  }
}
