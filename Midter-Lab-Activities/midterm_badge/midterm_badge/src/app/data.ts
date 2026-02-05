// src/app/data-service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, map } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts$: Observable<Post[]>;
  users$: Observable<User[]>;

  constructor(private http: HttpClient) {
    // Fetch all posts once and cache
    this.posts$ = this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(shareReplay(1));

    // Fetch all users once and cache
    this.users$ = this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(shareReplay(1));
  }

  // Latest 5 posts for Home page
  getLatestPosts(): Observable<Post[]> {
    return this.posts$.pipe(map(posts => posts.slice(0, 5)));
  }
}
