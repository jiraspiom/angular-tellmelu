import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Segredo } from 'src/models/Segredo';

@Injectable({
  providedIn: 'root'
})
export class SegredoService {
  // private baseUrl = 'http://localhost:3000/api/segredos'
  private baseUrl = 'https://apisecreto.vercel.app/api/segredos'

  constructor(
    private http: HttpClient,
    ) { }

  public getSegredo(): Observable<Segredo[]>{
    return this.http.get<Segredo[]>(this.baseUrl);
  }

}
