import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-rule',
  templateUrl: './node-rule.component.html',
  styleUrls: ['./node-rule.component.scss']
})
export class NodeRuleComponent implements OnInit {

  treeNode: any;
  @Input() set node(node: any) {
    this.treeNode = node;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
