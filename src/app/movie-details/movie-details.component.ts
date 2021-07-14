import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../class/movie';
import { OMDBService } from '../service/omdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie:Movie = new Movie();
  constructor(private route:ActivatedRoute, private omdbService:OMDBService) { 
   this.route.params.subscribe(
     param => {
       if (window.history.state.movie) this.movie=window.history.state.movie;
       else
       {
        param["id"] ? this.omdbService.getById(param["id"]).subscribe(data=>this.movie=data) : ""; 
       }
     }
   );
  }

  ngOnInit(): void {
  }

  trim(str:string):string{
    return str.replace(/ /g,"");
  }

}
