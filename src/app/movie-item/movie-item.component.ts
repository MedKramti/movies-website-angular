import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../class/movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:Movie = new Movie();
  constructor() { }

  ngOnInit(): void {
  }

}
