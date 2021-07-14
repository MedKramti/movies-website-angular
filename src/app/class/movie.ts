export class Movie {
     Title: string;
     Year: string;
     Rated: string;
     Released: string;
     Genre: Array<string>;
     Writer: string;
     Plot: string;
     Poster: string;
     Rating: Array<any>;

     constructor(Title?: string, Year?: string, Rated?: string, Released?: string,Genre?: Array<string>,
          Writer?: string, Plot?: string, Poster?: string, Rating?: Array<any>){
               this.Title = Title;
               this.Year = Year;
               this.Rated = Rated;
               this.Released = Released;
               this.Genre = Genre;
               this.Writer = Writer;
               this.Title = Title;
               this.Plot = Plot;
               this.Poster = Poster;
               this.Rating = Rating;
     }
}
