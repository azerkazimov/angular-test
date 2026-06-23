import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movies';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.css',
})
export class MoviesPage implements OnInit, OnDestroy {
  // Сигнал объявлен правильно
  movie = signal<any>(null);
  movieId!: string;
  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.movieId = params['id'];
      
      this.movieService.getMovieDetails(this.movieId).subscribe({
        next: (response) => {
          // ИСПРАВЛЕНО: Записываем данные в сигнал через .set()
          this.movie.set(response); 
        },
        error: (error) => {
          console.error('Error fetching movie details:', error);
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}