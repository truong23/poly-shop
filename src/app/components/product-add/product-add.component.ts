import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  constructor() { 
    this.productForm = new FormGroup({
      'productCode': new FormControl(null, Validators.required),
      'productName': new FormControl('123-321', [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.productForm.valid){
      console.log('Invalid data');
      return
    }
    console.log(this.productForm.value);
    
  }

}
