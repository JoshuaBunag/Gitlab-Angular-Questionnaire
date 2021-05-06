import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-node-new-dialog',
  templateUrl: './node-new-dialog.component.html',
  styleUrls: ['./node-new-dialog.component.scss']
})
export class NodeNewDialogComponent implements OnInit {

  @Output() closeDialogEmitter = new EventEmitter<any>();
  // @Input() newKnotDialogVisible: boolean;
  newKnotDialogVisible = true;
  constructor() {
  }

  ngOnInit(): void {
  }
  addNewNode(): void {
    this.closeDialogEmitter.next();
  }

  closeDialog(): void {
    this.closeDialogEmitter.next();
  }
}
