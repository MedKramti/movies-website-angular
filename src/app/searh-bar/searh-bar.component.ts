import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../class/movie';

@Component({
  selector: 'searh-bar',
  templateUrl: './searh-bar.component.html',
  styleUrls: ['./searh-bar.component.css']
})
export class SearhBarComponent implements OnInit {

  constructor() { }
  @Output() movies : EventEmitter<Movie> = new EventEmitter<Movie>();
  ngOnInit(): void {
  }

  search():void{
    console.log("Button clicked");
    // fetch movies from the api
    let m : Movie = new Movie();
    m.Title = "Hello world";
    m.Poster = "https://upload.wikimedia.org/wikipedia/en/1/14/Coverdvdcover.jpg";
    this.movies.emit(m);
  }

}
