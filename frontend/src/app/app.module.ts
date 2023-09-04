import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from './category/category.service';
import { BlogService } from './blogs/blog.service';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    CategoryListComponent,
    NavbarComponent,
    BlogDetailComponent,
    CreateCategoryComponent,
    CategoryEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CategoryService, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
