import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';
import { OMDBService } from '../service/omdb.service';
import data from './data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies : Array<Movie> = [];
  constructor(private omdbService : OMDBService) { }

  ngOnInit(): void {
    // fetch data from the API using the ids
    data.id.forEach( id => {
      this.omdbService.getById(id).subscribe(data => this.movies.push(data));
    });
  }

  displayMovie(movie:Movie):void{
    this.movies = [];
    this.movies.push(movie);
  }

}
