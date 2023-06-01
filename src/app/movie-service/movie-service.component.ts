import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-service',
  templateUrl: './movie-service.component.html',
  styleUrls: ['./movie-service.component.css']
})
export class MovieServiceComponent {
  // Sample movie data
  private movies: Movie[] = [
    {
      id: 1,
      popularity: 9.5,
      budget: 150000000,
      revenue: 1000000000,
      title: 'Spiderman: No Way Home',
      cast: ['Tom Holland', 'Zendaya', 'Jacob Batalon'],
      homepage: 'https://www.spidermannowayhome.movie/',
      director: 'Jon Watts',
      shortSummary: 'The third installment of the Spiderman franchise.',
      genres: ['Action', 'Adventure'],
      productionCompanies: ['Marvel Studios', 'Sony Pictures'],
      releaseYear: 2021
    },
    
  ];

  getFilteredMovies(genre: string): Movie[] {
    return this.movies;
  }

  getMovies(): Movie[] {
    return this.movies;
  }
}
