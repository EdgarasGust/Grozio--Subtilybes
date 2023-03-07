import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  pipe,
  retry,
  tap,
  throwError,
} from 'rxjs';

import { Comments } from './comments';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private apiServer = 'https://groziosubtilybes.lt/api/';
  private comment$ = new BehaviorSubject<Comments[]>([]);
  comments$: Observable<Comments[]> = this.comment$.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comments[]> {
    return this.http
      .get<Comments[]>(this.apiServer + '/get_comments.php/')
      .pipe(
        tap((x: Comments[]) => {
          this.comment$.next(x);
        }),
        retry(1),
        catchError(this.handleError)
      );
  }

  postComments(data: Comments): Observable<Comments> {
    const json = JSON.stringify(data);
    return this.http
      .post<Comments>(
        this.apiServer + '/post_comments.php/',
        json,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
