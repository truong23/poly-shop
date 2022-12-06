import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.loginForm.valid){
      console.log('Invalid Data')
      return;
    }
    console.log(this.loginForm.value)
  }

}
