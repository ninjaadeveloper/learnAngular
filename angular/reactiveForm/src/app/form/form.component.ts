import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  regForm = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-Z]+')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(15)])
  });

  submitForm() {
    if (this.regForm.valid) {
      console.log(this.regForm.value); // Form data
      alert('Form submitted!');
      this.regForm.reset();
    } else {
      alert('Please fill all required fields');
    }
  }

  get validate() {
    return this.regForm.controls;
  }

}
