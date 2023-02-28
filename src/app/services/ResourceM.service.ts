import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../member.interface';


@Injectable({
    providedIn: 'root'
  })

export class MService {

  private apiUrl: string ='https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name' );
  }

  constructor( private http: HttpClient ) { }

  buscarPais ( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}