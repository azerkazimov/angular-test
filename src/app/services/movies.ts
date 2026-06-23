import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '709587fa';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}?s=${encodeURIComponent(query)}&apikey=${this.apiKey}`,
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}?i=${encodeURIComponent(id)}&apikey=${this.apiKey}`,
    );
  }
}
