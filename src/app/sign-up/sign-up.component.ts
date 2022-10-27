import { User } from './../models/user.models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model: User = new User('', '', '', '');

  constructor() { }

title = "Comon! SignUp budy !!";

onSubmit(): void {
  // Formulaire envoyé
  console.log(this.model);
}

  ngOnInit(): void {
  }

}
