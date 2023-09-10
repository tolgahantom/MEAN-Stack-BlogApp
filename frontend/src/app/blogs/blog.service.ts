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

  createBlog(blogTitle: any, blogSubtitle: any, blogDescription: any) {
    const body = {
      blogTitle: blogTitle,
      blogSubtitle: blogSubtitle,
      blogDescription: blogDescription,
    };

    this.http.post<void>(this.url + '/create', body).subscribe(
      (response) => {
        console.log('Veri gönderme başarılı: ', response);
      },
      (error) => {
        console.error('Veri gönderme hatası: ', error);
      }
    );
  }
}
