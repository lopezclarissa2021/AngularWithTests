import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    this.http.get<any[]>("http://localhost:5158/api/customers").subscribe(result => {
      console.log(result);
    })
  }
}
