import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  titel="About Page";
product={
  name:'Shubham',
  age:"22",

}
item=0;

}
