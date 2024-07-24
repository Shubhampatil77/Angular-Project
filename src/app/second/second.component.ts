import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, HomeComponent,ReactiveFormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  
  localName: any = [];
  localNamee: any = [];
  dname: any;
  demail: any;
  dcontact: any;
  daddress: any;
  dpin: any;
  dpassword: any;

  fname: any;
  lname: any;
  contact: any;
  address: any;
  email: any;
  pin: any;
  password: any;

  acceptTerms: any;
  loclname: any;
  submitstatus: any = false;

  title = 'Registration-Form';
  someData: any;
  myForm: any;
  passwordPattern = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
  emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 contactPattern =  /^[0-9]{10}$/;


  constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
        contact: ['', [Validators.pattern(this.contactPattern)]],
      address: ['', Validators.required],
      email: ['', [Validators.pattern(this.emailPattern)]],
      pin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
      password: ['', [Validators.pattern(this.passwordPattern)]],
    });
  }

  onSubmit() {
      if(this.myForm.valid){ 
        this.submitstatus= true;
        console.log("Form Submitted Succesfully");
        this.fname = this.myForm.value.fname;
        this.lname = this.myForm.value.lname;
        this.contact = this.myForm.value.contact;
        this.address = this.myForm.value.address;
        this.email = this.myForm.value.email;
        this.pin = this.myForm.value.pin;
        this.password = this.myForm.value.password;
  
      }else{
        console.log("Form NOT Submitted Succesfully");
      }
  }}

