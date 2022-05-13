import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  constructor() {
    (this.imgLink = ''), (this.price = 0), (this.name = '');
  }

  ngOnInit(): void {}

  @Input() imgLink: string;
  @Input() price: number;
  @Input() name: string;
}
