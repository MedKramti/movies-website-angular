import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesContainerComponent } from './movies-container/movies-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MoviesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
