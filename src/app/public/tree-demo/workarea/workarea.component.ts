import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecisionTreeService } from '@services/decision-tree.service';
import { Rule } from '@entities/rule';
import { TreeNode } from 'primeng/api';
import { Knot } from '@entities/knot';
@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
})
export class WorkareaComponent implements OnInit {
  treeKnotList: Knot[] = [];
  tree: TreeNode[] = [];
  btnVisibility: boolean = false;
  
  @Input() set showTree(tree: any) {
    if (tree != undefined)
      this.buildTreeById(tree.value.id);
  };

  constructor(private decisionTreeService: DecisionTreeService) { }

  ngOnInit(): void {
    this.buildTreeById(1);
  }

  buildTreeById(treeId: number): void {
    this.decisionTreeService.getRootRule(treeId).subscribe((dtoTree: Knot[]) => {
      this.treeKnotList = dtoTree;
      this.buildGuiTree(dtoTree);
    });
  }

  buildGuiTree(dtoTree: Knot[]): void {
    this.tree = this.decisionTreeService.genTreeFromKnotList(dtoTree);
  }
  deleteKnot(knot: any): void {
    this.treeKnotList = this.decisionTreeService.removeKnotById(this.treeKnotList, knot.data.id);
    this.buildGuiTree(this.treeKnotList);
  }

}
