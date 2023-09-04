import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogs: any;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }
}
