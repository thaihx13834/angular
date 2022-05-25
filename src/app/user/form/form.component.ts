import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Output() handleSubmit: EventEmitter<any>;

  constructor() {
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  @Input() inputValues: any;

  // inputValues:  = {
  //   id: '',
  //   name: '',
  //   age: 0,
  //   email: '',
  //   sdt: '',
  // };

  onSubmit(userForm: NgForm): void {
    this.handleSubmit.emit(userForm.value);
    userForm.resetForm({ name: '', age: 0, email: '', sdt: '' });
  }
}
