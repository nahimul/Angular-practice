import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiResult } from './interfaces';
import { MovieResult } from './interfaces';
import { environment } from 'src/environments/environment'

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '48a1f719703c6e754ea316f3578657fa';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() {}

  getTopRatedMovie(page = 1) : Observable<ApiResult> {
    return this.http
    .get<ApiResult>(`${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`
    )
    .pipe(delay(5000));
  }
  getMovieDetails(id: string) : Observable<MovieResult> {
    return this.http.get<MovieResult>(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
  }
}
