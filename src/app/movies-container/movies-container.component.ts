import { HostBinding, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  @Input() movies : Array<Movie> = [];
  constructor() { 
    // testing the component
    /*let m1 = new Movie();
    m1.Title = "The Tomorrow War";
    m1.Poster = "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg";
    
    let m2 = new Movie();
    m2.Title = "The Pianist";
    m2.Poster = "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg";
    
    this.movies.push(m1,m2,m1, m2,m1, m2);*/
  }

  ngOnInit(): void {
  }

}
