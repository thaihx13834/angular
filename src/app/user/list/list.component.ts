import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {
    this.handleSubmit = new EventEmitter();
  }

  @Output() handleSubmit: EventEmitter<number>;

  ngOnInit(): void {}

  @Input() users: any;

  onEdit(userId: number) {
    this.handleSubmit.emit(userId);
  }
}
