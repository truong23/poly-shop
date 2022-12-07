import { CanActivate } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories!: Category[]
  id!: string

  constructor(private categoryServive: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryServive.getAll().subscribe(data=>{
      this.categories = data as Category[]
    })
  }
  delete(id: string) {
    this.categoryServive.delete(id)
  }
}
