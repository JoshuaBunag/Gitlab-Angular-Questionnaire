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
import { NextKnotAllocation } from '@entities/next-knot-allocation';
@Injectable({
  providedIn: 'root',
})
export class DecisionTreeService {
  constructor(
    private http: HttpClient,
    private knotTransFormationSvc: KnotTransformationService
  ) { }

  knotListRemoveElement(dtoTree: Knot[], knotId: number): Knot[] {
    dtoTree = dtoTree.filter((knot: any) => {
      if (knot.nextKnotAllocations != undefined && knot.nextKnotAllocations.length > 0) {
        // remove nextKnotAllocations pointing at the current element
        knot.nextKnotAllocations = knot.nextKnotAllocations.filter((nextKnotAllocation: any) => {
          return nextKnotAllocation.idNextKnot != knotId;
        });
      }
      return knot.id != knotId;
    });
    return dtoTree;
  }

  removeKnotById(dtoTree: Knot[], knotId: number): Knot[] {

    for (let knot of dtoTree) {
      if (knot instanceof Scenario && knot.id == knotId) {
        dtoTree = this.knotListRemoveElement(dtoTree, knotId);
      }

      if (knot instanceof Rule) {
        if (knot.id == knotId) {
          if (knot.nextKnotAllocations != undefined && knot.nextKnotAllocations.length > 0) {
            for (let nextKnotAllocation of knot.nextKnotAllocations) {
              dtoTree = this.removeKnotById(dtoTree, nextKnotAllocation.idNextKnot)
            }
          }
          dtoTree =  this.knotListRemoveElement(dtoTree, knot.id)
        }
      }
    }
    console.log(dtoTree);
    return dtoTree;
  }

  getKnotById(dtoTree: Knot[], knotId: number) {
    return dtoTree.find((knot: Rule) => {
      return knot.id == knotId;
    });
  }
  getRootKnot(dtoTree: Knot[]): Knot {
    return dtoTree.find((knot: Rule) => {
      return knot.start == true;
    });
  }

  genTreeFromKnotList(dtoTree: Knot[]): TreeNode[] {
    let node: TreeNode[] = [];
    let rootKnot: Knot = this.getRootKnot(dtoTree);
    node.push(this.genTree(rootKnot, dtoTree, null));
    return node;
  }
  genChildNodes(knot: Rule, dtoTree: Knot[]): TreeNode[] {
    let childList: TreeNode[] = [];
    if (knot.nextKnotAllocations.length > 0) {
      for (let nextKnotAllocation of knot.nextKnotAllocations) {
        let childKnot: Knot = this.getKnotById(
          dtoTree,
          nextKnotAllocation.idNextKnot
        );
        childList.push(this.genTree(childKnot, dtoTree, nextKnotAllocation));
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
  genTree(knot: Knot, dtoTree: Knot[], prevKnotAllocation: NextKnotAllocation): TreeNode {

    let rootNode: TreeNode = {
      data: {
        id: knot.id,
        fieldName: knot instanceof Rule ? knot.fieldName : undefined,
        name: knot.name,
        start: knot instanceof Rule ? knot.start : undefined,
        knotType: knot.knotType,
        prevKnotAllocation: prevKnotAllocation
      },
      expanded: true,
      styleClass: this.getNodeStyleClass(knot),
      type: knot instanceof Rule ? 'RULE' : 'SCENARIO',
      children:
        knot instanceof Rule ? this.genChildNodes(knot, dtoTree) : undefined,
    };

    return rootNode;
  }

  getTreeList(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiBaseUrl + '/trees/versions');
  }

  getRootRule(treeId: number): Observable<Knot[]> {
    return this.http
      .get<Knot[]>(environment.apiBaseUrl + '/knots/' + treeId)
      .pipe(map((knots) => this.knotTransFormationSvc.convertTreeKnots(knots)));
  }
}
