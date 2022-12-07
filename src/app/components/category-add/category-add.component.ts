import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category: Category

  constructor(private categoryService: CategoryService) {
    this.category = new Category()
  }

  ngOnInit(): void {
  }

  save(): any{
    this.categoryService.save(this.category).subscribe(data => {
      console.log(data);
    })
  }

}
