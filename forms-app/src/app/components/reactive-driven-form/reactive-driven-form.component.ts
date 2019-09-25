import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.scss']
})
export class ReactiveDrivenFormComponent implements OnInit {
  // reactiveForm = new FormGroup({
  //   userName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  // });
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      userName: ['', Validators.required],
      phoneNumber: [''],
      password: [''],
      email: ['']
    });
  }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(this.reactiveForm);
  }
}
