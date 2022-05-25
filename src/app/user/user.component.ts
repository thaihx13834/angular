import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users: any = [
    {
      id: 1,
      name: 'thai',
      age: 20,
      email: 'Ahihi@gmail.com',
      sdt: '18237910437101',
    },
    {
      id: 2,
      name: 'tha123123i',
      age: 20,
      email: 'Ahihi@gmail.com',
      sdt: '18237910437101',
    },
  ];

  onCreateUser(newUser: any): void {
    // console.log(newUser);
    const newUserId = this.users
      .map((user: any) => user.id)
      .sort((a: number, b: number) => b - a);

    const maxId = newUserId[0];

    this.users.push({ ...newUser, id: maxId + 1 });
  }

  formValue = {
    id: '',
    name: '',
    age: 0,
    email: '',
    sdt: '',
  };

  onBindData(idUser: number): void {
    console.log(idUser);
    const userEdit = this.users.find((user: any) => user.id === idUser);
    this.formValue = { ...userEdit };
  }
}
