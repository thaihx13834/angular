import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  inputValue = {
    id: '',
    name: '',
    age: 0,
    email: '',
    sdt: '',
  };

  users: any = [
    {
      id: 1,
      name: 'thai',
      age: 20,
      email: 'Ahihi@gmail.com',
      sdt: '18237910437101',
    },
  ];

  onSubmit(userForm: NgForm): void {
    if (this.inputValue.id) {
      this.users = this.users.map((user: any) =>
        user.id === this.inputValue.id ? this.inputValue : user
      );
      userForm.resetForm({ name: '', age: 0, email: '', sdt: '' });
    } else {
      const newUserId = this.users
        .map((user: any) => user.id)
        .sort((a: number, b: number) => a - b);

      const maxId = newUserId[0];
      this.users.push({ ...userForm.value, id: maxId + 1 });

      userForm.resetForm({ name: '', age: 0, email: '', sdt: '' });
    }
  }

  removeItem(id: number): void {
    this.users = this.users.filter((user: any) => user.id !== id);
  }

  updateItem(id: number): void {
    const itemUpdate = this.users.find((user: any) => user.id === id);
    this.inputValue = {
      id: itemUpdate.id,
      name: itemUpdate.name,
      age: itemUpdate.age,
      email: itemUpdate.email,
      sdt: itemUpdate.sdt,
    };
  }
}
