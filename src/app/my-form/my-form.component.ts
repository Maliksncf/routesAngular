import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Order } from '../models/order.models';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
   // Tu instancies ton objet avec des valeurs initiales
   model: Order = new Order('', 0, new Date(), '');

  constructor() { }

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.model);
  }
  ngOnInit(): void {
  }
}
