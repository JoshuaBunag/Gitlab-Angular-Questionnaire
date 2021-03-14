import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  removeNode(treeNode: any): boolean {
    console.log(treeNode);
    return true;
  }
  btnAddVisible(treeNode: any): boolean {
    return true;
  }

}
