import { Component, OnInit, Input } from '@angular/core';
import { DecisionTreeService } from '@services/decision-tree.service';
import { Rule } from '@entities/rule';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
})
export class WorkareaComponent implements OnInit {
  tree: TreeNode[] = [];
  btnVisibility: boolean = false;
  @Input() entity: any;

  constructor(private decisionTreeService: DecisionTreeService) {}

  ngOnInit(): void {
    this.decisionTreeService.getRootRule().subscribe((dtoTree) => {
      if (this.tree.length == 0) {
        this.tree = this.decisionTreeService.genTree(dtoTree);
      }
    });
  }
}
