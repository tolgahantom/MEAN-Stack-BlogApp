import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get<Category>(this.url + '');
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  addCategoryToDb(categoryName: any, url: any) {
    const body = {
      categoryName: categoryName,
      url: url,
    };
    this.http.post<void>(this.url + '/create-category', body).subscribe(
      (response) => {
        console.log('Veri gönderme başarılı: ', response);
      },
      (error) => {
        console.error('Veri gönderme hatası: ', error);
      }
    );
  }

  deleteCategoryFromDb(categoryid: number) {
    const body = {
      categoryId: categoryid,
    };
    this.http.post<void>(this.url + '/delete-category', body).subscribe(
      (response) => {
        console.log('Veri gönderme başarılı: ', response);
      },
      (error) => {
        console.error('Veri gönderme hatası: ', error);
      }
    );
  }

  updateCategoryName(name: any, id: any, url: any) {
    const body = {
      categoryName: name,
      categoryId: id,
      url: url,
    };
    this.http.post<void>(this.url + '/update-category', body).subscribe(
      (response) => {
        console.log('Veri gönderme başarılı: ', response);
      },
      (error) => {
        console.error('Veri gönderme hatası: ', error);
      }
    );
  }
}
