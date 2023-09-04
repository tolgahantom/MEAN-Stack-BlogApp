import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<any> {
    return this.http.get(this.url + '');
  }

  getBlogById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}
