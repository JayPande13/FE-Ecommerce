import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login.service';

@Component({
  selector: 'app-Sign-Up',
  templateUrl: './Sign-Up.component.html',
  styleUrls: ['./Sign-Up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm!: FormGroup
  public loginForm!: FormGroup;
  public userPresent: boolean = true
  public newUser: boolean = false


  constructor(private fb:FormBuilder, private loginService : LoginService,private router:Router) { }

  ngOnInit() {
    this.singUpFormIntialized();
    }

  singUpFormIntialized(){
    this.signUpForm = this.fb.group({
      name:[''],
      password:[''],
      confirmPassword:[''],
      email:[''],
      phone:['']
    })
  }
  loginFormIntialized(){
    this.loginForm = this.fb.group({
      email:[''],
      password:['']

    })
  }
  submit(){
    this.loginService.addNewUser(this.signUpForm.value).subscribe((user:any) => {
      this.signUpForm.reset();
    })
  }
  userChange(){
    this.newUser =true;
    this.userPresent =false;
  }

}
