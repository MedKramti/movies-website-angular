import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../class/movie';
import { HandleErrorService } from '../service/handle-error.service';
import { OMDBService } from '../service/omdb.service';

@Component({
  selector: 'searh-bar',
  templateUrl: './searh-bar.component.html',
  styleUrls: ['./searh-bar.component.css']
})
export class SearhBarComponent implements OnInit {
  searchFilter:string = "all";
  errorMessage = "";
  @Output() movies : EventEmitter<Movie> = new EventEmitter<Movie>();
  constructor(private omdbService : OMDBService) { }
  ngOnInit(): void {
  }

  search(title : HTMLInputElement):void{
     if (title.value.trim() == "") return;
    // console.log("Button clicked");
    // fetch movies from the api
    this.omdbService.getByTitle(title.value).subscribe(
      (data:any) => { 
         let movie = data; 
         this.movies.emit(movie);
        },
      error => { 
        this.errorMessage = HandleErrorService.handleError(error);
      }
    );

    this.searchFilter = "search";
  }
}
