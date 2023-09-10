import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent {
  public Editor = ClassicEditor;
  constructor(private blogService: BlogService) {}

  submitForm = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    desc: new FormControl(''),
  });

  Submit(e: Event) {
    e.preventDefault();
    this.blogService.createBlog(
      this.submitForm.value.title,
      this.submitForm.value.subtitle,
      this.submitForm.value.desc
    );
    this.submitForm.reset();
  }
}
