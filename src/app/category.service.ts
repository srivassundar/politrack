import { Injectable } from '@angular/core';

import { Category } from './category';
import { CATEGORIES } from './data/categories';

@Injectable()
export class CategoryService {
  getCategories(): Category[] {
    return CATEGORIES;
  }

  getCategory(id: number): Category {
    return CATEGORIES.find(category => category.id === id);
  }
}
