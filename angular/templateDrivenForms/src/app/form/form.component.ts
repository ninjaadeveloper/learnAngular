import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  SubmitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Form submitted successfully!');
      form.resetForm(); // optional reset after submit
    } else {
      alert('Please fill all required fields!');
    }


  }

}
