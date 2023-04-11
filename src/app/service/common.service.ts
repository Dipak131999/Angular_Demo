import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  url = '';

  private readonly baseUrl = environment.apiUrl;
  constructor(public http: HttpClient) {}

  post(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data);
  }

  get(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  update(url: string, data: any) {
    return this.http.put(this.baseUrl + url, data, {});
  }

  delete(url: string) {
    return this.http.delete(this.baseUrl + url);
  }

  public getParamsFromObj(obj:any): HttpParams {
    let params = new HttpParams();

    if (obj) {
      Object.keys(obj).forEach((key) => {
        if (obj[key] !== '' && obj[key] !== undefined) {
          params = params.set(key, obj[key]);
        }
      });
    }
    return params;
  }

  getWithTokenWithParams(url: string, param: HttpParams) {
    return this.http.get(this.baseUrl + url, {
      params: param,
    });
  }
}
