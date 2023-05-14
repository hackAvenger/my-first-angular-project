import { Component, OnInit ,Input } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  @ Input() item:number=0;
  ngOnInit(): void {
  }

  getData(data: NgForm) {
    console.log(data);
  }

}
