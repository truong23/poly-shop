import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: Product
  constructor(private route: ActivatedRoute) {
      this.product = new Product('','');
      if(route.snapshot.params['id'])
      this.product.productCode = route.snapshot.params['id']
  }

   changeDetail(form: NgForm){
      console.log(form.value)
      this.product.productCode = form.value.productCode.toUpperCase()
   }

  ngOnInit(): void {
  }

}
