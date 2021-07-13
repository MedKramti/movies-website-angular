import { HostBinding } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  public movies : Array<Movie> = [];
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
