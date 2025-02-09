import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiResult } from '../models/interfaces';
import { MovieResult } from '../models/interfaces';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {
  }

  getTopRatedMovie(page = 1): Observable<ApiResult> {
    return this.http
      .get<ApiResult>(
        `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`
      )
      .pipe(delay(5000));
  }
  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }
}
