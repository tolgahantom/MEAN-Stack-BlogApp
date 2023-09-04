import { Component } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  categories: any;
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(id: number) {
    if (confirm('Are you sure to delete?')) {
      return this.categoryService.deleteCategoryFromDb(id);
    } else {
      return;
    }
  }

  updateCategory(id: number) {
    if (confirm('Are you sure to delete?')) {
      return this.categoryService.deleteCategoryFromDb(id);
    } else {
      return;
    }
  }
}
