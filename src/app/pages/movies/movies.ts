import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movies';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css',
})
export class Movies {
  searchTitle: string = '';
  movies = signal<any[]>([]);
  errorMessage = signal<string>('');

  constructor(private movieService: MovieService) {}

  search() {
    if (this.searchTitle.trim() === '') {
      this.errorMessage.set('Please enter a movie title.');
      this.movies.set([]);
      return;
    }

    this.movieService.searchMovies(this.searchTitle).subscribe({
      next: (response) => {
        if (response.Response === 'True' && response.Search?.length) {
          this.movies.set(response.Search);
          this.errorMessage.set('');
        } else {
          this.errorMessage.set(response.Error ?? 'No movies found.');
          this.movies.set([]);
        }
      },
      error: () => {
        this.errorMessage.set('An error occurred while fetching movies.');
        this.movies.set([]);
      },
    });
  }

}
