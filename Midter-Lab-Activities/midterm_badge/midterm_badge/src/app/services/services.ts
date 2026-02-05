import { Component, inject } from '@angular/core';
import { DataService } from '../data';
import { AsyncPipe, UpperCasePipe, NgIf, NgForOf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { TruncatePipe } from '../truncate-pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TruncatePipe,
    UpperCasePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class Services {
  private data = inject(DataService);

  searchControl = new FormControl<string>('');

  filteredPosts$ = combineLatest([
    this.data.posts$,
    this.searchControl.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, search]) => {
      if (!posts) return [];
      const term = (search || '').toLowerCase();
      return posts.filter(
        post =>
          post.title.toLowerCase().includes(term) ||
          post.body.toLowerCase().includes(term)
      );
    })
  );
}
