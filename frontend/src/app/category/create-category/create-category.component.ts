import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent {
  isEditMode: boolean = false;
  selectedCategory: any;
  selectedCategoryId: number;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id === undefined) {
        this.isEditMode = false;
      } else {
        this.isEditMode = true;
        this.selectedCategoryId = id;
        this.categoryService
          .getCategoryById(this.selectedCategoryId)
          .subscribe((data) => {
            this.selectedCategory = data[0];
          });
      }
    });
  }

  saveProductToDb(name: any) {
    const url = this.formatCategoryName(name.value);
    this.categoryService.addCategoryToDb(name.value, url);
    this.router.navigate(['/']);
  }

  formatCategoryName = (categoryName: string): string => {
    return categoryName.replace(/\s+/g, '-').toLowerCase();
  };

  updateCategory(name: any) {
    if (
      confirm(
        `Are you sure to change category name ${this.selectedCategory.categoryName} to ${name.value}`
      )
    ) {
      const url = this.formatCategoryName(name.value);
      this.categoryService.updateCategoryName(
        name.value,
        this.selectedCategoryId,
        url
      );
      this.router.navigate(['/']);
    }
  }
}
