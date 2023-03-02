import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../member.interface';


@Injectable({
    providedIn: 'root'
  })

export class MemberService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searhcMember( termino: string): Observable<any>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get( url );
  }
}