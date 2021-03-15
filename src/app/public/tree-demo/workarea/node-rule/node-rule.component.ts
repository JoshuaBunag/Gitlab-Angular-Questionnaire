import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-node-rule',
  templateUrl: './node-rule.component.html',
  styleUrls: ['./node-rule.component.scss'],
})
export class NodeRuleComponent implements OnInit {
  treeNode: any;
  @Input() set node(node: any) {
    this.treeNode = node;
  }
  @Output() treeNodeDeletionEmitter = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  removeNode(treeNode: any): void {
    this.treeNodeDeletionEmitter.next(treeNode);
  }
  btnAddVisible(treeNode: any): boolean {
    return true;
  }

  addNode(treeNode: any): void {
    console.log('add node');
  }
}
