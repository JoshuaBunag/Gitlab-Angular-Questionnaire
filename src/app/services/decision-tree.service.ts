import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Rule } from '../entities/rule';
import { Scenario } from '../entities/scenario';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Knot } from '../entities/knot';
import { TreeNode } from 'primeng/api';
import { KnotTransformationService } from '@services/knot-transformation.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DecisionTreeService {
  constructor(
    private http: HttpClient,
    private knotTransFormationSvc: KnotTransformationService
  ) {}

  genTree(dtoTree: Rule): TreeNode[] {
    let node: TreeNode[] = [];
    node.push(this.genNode(dtoTree));
    return node;
  }

  genChildNodes(dtoTree: Rule): TreeNode[] {
    let childList: TreeNode[] = [];
    if (dtoTree.nextKnotAllocations.length > 0) {
      for (let nextKnotAllocation of dtoTree.nextKnotAllocations) {
        childList.push(this.genNode(nextKnotAllocation.nextKnot));
      }
    }
    return childList;
  }

  getNodeStyleClass(dtoTree: Knot): string {
    let nodeStyle = 'node ';
    if (dtoTree instanceof Rule) {
      nodeStyle += 'rule';
    }

    if (dtoTree instanceof Scenario) {
      nodeStyle += 'scenario';
    }
    return nodeStyle;
  }
  genNode(dtoTree: Knot): TreeNode {
    let rootNode: TreeNode = {
      data: {
        id: dtoTree.id,
        decisionFieldName:
          dtoTree instanceof Rule ? dtoTree.decisionFieldName : undefined,
        name: dtoTree.name,
        start: dtoTree instanceof Rule ? dtoTree.start : undefined,
        knotType: dtoTree.knotType,
      },
      expanded: true,
      styleClass: this.getNodeStyleClass(dtoTree),
      type: dtoTree instanceof Rule ? 'RULE' : 'SCENARIO',
      children:
        dtoTree instanceof Rule ? this.genChildNodes(dtoTree) : undefined,
    };

    return rootNode;
  }

  getTreeList(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiBaseUrl + '/tree/versions');
  }

  getRootRule(): Observable<Knot[]> {
    return this.http
      .get<Knot[]>(environment.apiBaseUrl + '/knots/1')
      .pipe(map((knots) => this.knotTransFormationSvc.convertTreeKnots(knots)));
  }
}
