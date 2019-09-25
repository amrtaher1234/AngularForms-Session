import { Component, OnInit } from '@angular/core';

/* Aim of this component:
- Show how to use ngSubmit on forms
- Binding with component variables to inputs in the form
- Validate by checking for each variable either inside an object or each one is alone. (WORST)
- Validate using the #form="ngForm" and adding required / min-length to each input. (BEST)
 */
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  errorMessage = '';
  userName = '';
  phoneNumber = '';
  email = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
    if (this.email.length && this.password.length && this.phoneNumber.length && this.userName.length) {
      // form is valid.
      this.errorMessage = '';
      // do somehting
    } else {
      this.errorMessage = 'The fields in the form should not be empty!';
    }
  }
}
