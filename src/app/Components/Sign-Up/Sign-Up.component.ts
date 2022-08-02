import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Sign-Up',
  templateUrl: './Sign-Up.component.html',
  styleUrls: ['./Sign-Up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formIntialization();
    }

  formIntialization(){
    this.signUpForm = this.fb.group({
      userName:[''],
      password:[''],
      // firstName:[''],
      // lastName:[''],
      // email:[''],
      // phoneNumber:['']


    })
  }

}
