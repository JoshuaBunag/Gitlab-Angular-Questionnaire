import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-node-scenario',
  templateUrl: './node-scenario.component.html',
  styleUrls: ['./node-scenario.component.scss']
})
export class NodeScenarioComponent implements OnInit {

  treeNode: any;
  @Input() set node(node: any) {
    this.treeNode = node;
  };
  @Output() treeNodeDeletionEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  removeNode(treeNode: any): void {
    this.treeNodeDeletionEmitter.next(treeNode);
  }
  btnAddVisible(treeNode: any): boolean {
    return true;
  }

}
