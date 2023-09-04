import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  posts: any;
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('http://localhost:3000/api/data').subscribe((data) => {
      this.data = data;
    });
  }

  getPosts() {
    this.http.get('http://localhost:3000/posts').subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
