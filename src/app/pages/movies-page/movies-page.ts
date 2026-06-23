import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movies';
import { MoviePlayer } from '../movie-player/movie-player';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MoviePlayer],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.css',
})
export class MoviesPage implements OnInit, OnDestroy {
  movie = signal<any>(null);
  loading = signal(true);
  error = signal<string | null>(null);
  movieId = signal<string | null>(null);
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.movieId.set(id);
      this.loading.set(true);
      this.error.set(null);
      this.movie.set(null);

      this.movieService.getMovieDetails(id).subscribe({
        next: (response) => {
          if (response.Response === 'False') {
            this.error.set(response.Error ?? 'Movie not found.');
          } else {
            this.movie.set(response);
          }
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load movie details.');
          this.loading.set(false);
        },
      });
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }
}
