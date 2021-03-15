import { Component, OnInit, Input } from '@angular/core';
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
  @Input() entity: any;

  constructor(private decisionTreeService: DecisionTreeService) {}

  ngOnInit(): void {
    this.decisionTreeService.getRootRule().subscribe((dtoTree: Knot[]) => {
      this.treeKnotList = dtoTree;
      this.buildGuiTree(dtoTree);
      // this.tree = this.decisionTreeService.genTreeFromKnotList(dtoTree);
      // if (this.tree.length > 0) {
      // }
    });
  }

  buildGuiTree(dtoTree: Knot[]): void {
    this.tree = this.decisionTreeService.genTreeFromKnotList(dtoTree);
  }
  deleteKnot(knot: any): void {
    this.treeKnotList = this.decisionTreeService.removeKnotById(this.treeKnotList , knot.data.id);
    this.buildGuiTree(this.treeKnotList );
  }
}
