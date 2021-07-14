import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../class/movie';
// rename API-key-example.json to API-key.json
// edit the key value
import data from './API-key.json'
@Injectable({
  providedIn: 'root'
})
export class OMDBService {
  
  private URL:string = `http://www.omdbapi.com/?apikey=${data.key}`
  constructor(private http:HttpClient) { }

  public getByTitle(title:string):Observable<Movie> {
    return this.http.get<Movie>(`${this.URL}&t=${title}`);
  }

  public getById(id:string):Observable<Movie> {
    return this.http.get<Movie>(`${this.URL}&i=${id}`);
  }

}
