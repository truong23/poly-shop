import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/common/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  category!: Category
  id!: string
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ){
    this.id = route.snapshot.params['id']
  }

  ngOnInit(){
    this.categoryService.get(this.id).subscribe(data=>{
      this.category = data as Category
    })
  }

  update(){
    this.categoryService.update(this.id, this.category).subscribe(data => {
      console.log(data);
    })
  }
}
