import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  btnRmvVisible(treeNode: any): boolean {
    if(treeNode.children.length > 0) {
      return false;
    }
    return true;
  }
  btnAddVisible(treeNode: any): boolean {
    return true;
  }

  addNode(treeNode: any): void {
    console.log('add node');
  }
}
