import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dame',
  templateUrl: './dame.component.html',
  styleUrls: ['./dame.component.css'],
})
export class DameComponent implements OnInit {
  constructor() {
    this.dame = 0;
  }
  @Input() dame: number;

  ngOnInit(): void {}
}
