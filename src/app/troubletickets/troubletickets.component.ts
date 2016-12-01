import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-troubletickets',
  templateUrl: './troubletickets.component.html',
  styleUrls: ['./troubletickets.component.css']
})
export class TroubleticketsComponent {
  userForm: any;
  
  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
       'phone': ['', Validators.required],
      'profile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {

      alert('Ticket Created Successfully');
    }
  }
}