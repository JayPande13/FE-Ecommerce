import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
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


  constructor(private fb:FormBuilder, private loginService : LoginService,private router:Router,private notification: NzNotificationService,private modelRef:NzModalRef<SignUpComponent>,) { }

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

  loginUser(){
    const loginUser ={
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password
    }
    this.loginService.loginUser(loginUser).subscribe((user:any) => {
      if(user){
        this.notification.success("Login Successful","SUCCESS")
        this.closeModal(user);
        this.signUpForm.reset();
      }else{
        this.notification.error("Login Failed","FAILED")
        this.closeModal(user);
        this.signUpForm.reset();
      }
    })
  }

  closeModal(userData:any){
    this.modelRef.close(userData);
  }

}
