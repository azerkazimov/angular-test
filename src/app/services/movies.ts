import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // <-- ОБЯЗАТЕЛЬНО ДОБАВЬТЕ ЭТО СВОЙСТВО
})
export class MovieService {
    private apiUrl: string = 'http://www.omdbapi.com/';
    private apiKey: string = '709587fa';

    constructor(private http: HttpClient) {}

    searchMovies(query: string): Observable<any>{
        return this.http.get<any>(`${this.apiUrl}?s=${query}&apikey=${this.apiKey}`);
    }

    getMovieDetails(id: string): Observable<any> {
        // https://www.omdbapi.com/?i=tt0365467&apikey=709587fa
        return this.http.get<any>(`${this.apiUrl}?i=${id}&apikey=${this.apiKey}`);
    }
}
