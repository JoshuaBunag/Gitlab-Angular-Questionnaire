import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {


  showTree: any;
  constructor() { }

  ngOnInit(): void {
  }

  showEntity(selectedListItem: any): void {
    this.showTree = selectedListItem;
  }
}
