import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessdataService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.balldontlie.io/v1/players';
  private apiKey = '9893049c-3c99-4c80-a232-26425f3939af';

  getData(): Observable<any[]>{
    const headers = new HttpHeaders({
      'Authorization': this.apiKey
    })
    return this.http.get<any[]>(this.apiUrl, {headers});
  }
}
