import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  selectedBlog: any;
  constructor(
    private router: ActivatedRoute,
    private blogService: BlogService
  ) {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.blogService.getBlogById(id).subscribe((data) => {
        this.selectedBlog = data[0];
      });
    });
  }

  ngOnInit(): void {}
}
