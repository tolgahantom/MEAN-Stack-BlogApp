import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';

const routes: Routes = [
  { path: 'blogs/:id', component: BlogDetailComponent },
  { path: 'blog-create', component: BlogCreateComponent },
  { path: 'category-create', component: CreateCategoryComponent },
  { path: 'category-create/:id', component: CreateCategoryComponent },
  { path: 'category-edit', component: CategoryEditComponent },
  { path: '', component: BlogListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
