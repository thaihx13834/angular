import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Page Thái';
  name = 'Hoàng Xuân Thái';
  classname = 'WE16301';
  masv = 'PH13834';

  champions = [
    {
      name: 'Yi',
      dame: 100,
      df: '2000',
      speed: 'asda',
      price: 6300,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS499aM4q_k4OOi65_tzmsAldhxNZY3zDp9Jw&usqp=CAU',
    },
    {
      name: 'Yone',
      dame: 6000,
      df: '2000',
      speed: 'asdasd',
      price: 6300,
      avatar:
        'https://kenh14cdn.com/2020/4/24/photo-2-15877213110591102952995.jpg',
    },
    {
      name: 'Yone',
      dame: 300,
      df: '2000',
      speed: 'asas2da',
      price: 200,
      avatar:
        'https://preview.redd.it/u8nqc9gxjke61.png?auto=webp&s=d7f4ce688d34fae22aa58f532ae3b536f44eacf4',
    },
  ];

  student = { name: 'Thais', id: 'ph123123' };

  showStatus = true;

  displayTable = 'block';

  displayNone = 'none';

  onClickBtn() {
    this.showStatus = !this.showStatus;
    // this.displayNone = this.displayNone ? this.displayNone : 'none';
  }

  champ: any = { name: '', dame: 0, price: 0, avatar: '', df: 0, speed: '' };

  onInput(
    event: any,
    key: 'name' | 'avatar' | 'price' | 'dame' | 'df' | 'speed'
  ) {
    // console.log(inputname, event.target.value);
    this.champ[key] = event.target.value;
  }

  inputVl = {};

  onSubmit() {
    console.log(this.champ);
    this.champions.push(this.champ);
    this.champ = {
      name: '',
      dame: '',
      price: '',
      avatar: '',
      df: '',
      speed: '',
    };
  }
}
