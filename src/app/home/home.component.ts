import { Component, OnInit } from '@angular/core';
import { Movie } from '../class/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayMovie(movie:Movie):void{
    console.log(movie);
  }

}
