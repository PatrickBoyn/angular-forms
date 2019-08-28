import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form', { static: false }) signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Not the best approach.
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'test@test.com',
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'A very secret answer',
    //   gender: 'male',
    // });
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
