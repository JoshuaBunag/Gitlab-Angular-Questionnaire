import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecisionTreeService } from '@services/decision-tree.service';
import { Knot } from '@entities/knot';
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
  // @Output() treeNodeNewEmitter = new EventEmitter<any>();
  newKnotDialogVisible = false;
  constructor(private decisionTreeService: DecisionTreeService) { }

  ngOnInit(): void { }

  removeNode(treeNode: any): void {
    this.treeNodeDeletionEmitter.next(treeNode);
  }

  // return if btn to add new knot is visible
  btnAddVisible(treeNode: any): boolean {
    return true;
  }

  addNode(treeNode: any): void {
    this.newKnotDialogVisible = true;
  }

  closeDialog(): void {
    this.newKnotDialogVisible = false;
  }
}
