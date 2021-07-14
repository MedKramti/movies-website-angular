import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../class/movie';
import { OMDBService } from '../service/omdb.service';

@Component({
  selector: 'searh-bar',
  templateUrl: './searh-bar.component.html',
  styleUrls: ['./searh-bar.component.css']
})
export class SearhBarComponent implements OnInit {

  constructor(private omdbService : OMDBService) { }
  @Output() movies : EventEmitter<Movie> = new EventEmitter<Movie>();
  ngOnInit(): void {
  }

  search(title : HTMLInputElement):void{
    // console.log("Button clicked");
    // fetch movies from the api
    this.omdbService.getByTitle(title.value).subscribe(
      (data:any) => { 
         let movie = data; 
         this.movies.emit(movie);
        },
      error => { console.log("Error : ",error)}
    );
    
  }

}
