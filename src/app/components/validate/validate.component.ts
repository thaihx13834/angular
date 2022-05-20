import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css'],
})
export class ValidateComponent implements OnInit {
  constructor() {
    this.key = '';
  }

  ngOnInit(): void {}

  @Input() field: any;
  @Input() key: string;
}
