import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

({
  providedIn: 'root'
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
      homepage: 'https://www.spiderman-movie.com',
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
}
