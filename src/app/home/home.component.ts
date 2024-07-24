import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name:any;
  email:any;
  pin:any;
  contact:any;
  address:any;
 
  myForm: any;
  submitstatus: boolean = false;
  localNamee:any;
  infodata: any[] = [];
  constructor(private router: Router)
   { 
  }
  
  doAdd() {
    let existingData = localStorage.getItem('infodata');
    let infodata = existingData ? JSON.parse(existingData) : [];

    let newData = {
        'name': this.name,
        'contact': this.contact,
        'address': this.address,
        'email': this.email,
        'pin': this.pin
    };
    infodata.push(newData);
    localStorage.setItem('infodata', JSON.stringify(infodata));
    this.name = "";
    this.email = "";
    this.pin = "";
    this.contact = "";
    this.address = "";
}

  doShow() {
    this.localNamee = localStorage.getItem('infodata');
    this.localNamee = JSON.parse(this.localNamee)
    console.log(this.localNamee);
  }
  
  show() {
    this.submitstatus = true;
    if (this.myForm.valid) {
      this.router.navigate(['/new']);
    }
  }ngOnInit() {
    // Retrieve data from local storage
    const existingData = localStorage.getItem('infodata');
  
    // Check if there is existing data in local storage
    if (existingData) {
      // If there is existing data, parse the JSON string into a JavaScript array
      this.infodata = JSON.parse(existingData);
    } else {
      // If there is no existing data, initialize this.infodata as an empty array
      console.log("no data found");           

      this.infodata = [];
    }
  }
  

}
