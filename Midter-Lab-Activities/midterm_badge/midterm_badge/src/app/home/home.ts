import { Component, inject } from '@angular/core';
import { AsyncPipe, UpperCasePipe, SlicePipe } from '@angular/common';
import { DataService, Post } from '../data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, SlicePipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  private data: DataService = inject(DataService);

  latestPosts$ = this.data.posts$.pipe(
    map((posts: Post[]) => posts.slice(0, 5))
  );
}
