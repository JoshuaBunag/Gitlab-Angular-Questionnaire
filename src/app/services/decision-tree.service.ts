import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Rule } from '../entities/rule';
import { Scenario } from '../entities/scenario';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Knot } from '../entities/knot';
import { NextKnotAllocation } from '../entities/next-knot-allocation';
import { TreeNode } from 'primeng/api';
import { faGrinTongueSquint } from '@fortawesome/free-solid-svg-icons';
@Injectable({
  providedIn: 'root',
})
export class DecisionTreeService {
  constructor() {}

  genTree(dtoTree: Rule): TreeNode[] {
    let node: TreeNode[] = [];
    node.push(this.genNode(dtoTree));
    return node;
  }

  genChildNodes(dtoTree: Rule): TreeNode[] {
    let childList: TreeNode[] = [];
    if (dtoTree.children.length > 0) {
      for (let nextKnotAllocation of dtoTree.children) {
        childList.push(this.genNode(nextKnotAllocation.nextKnot));
      }
    }
    return childList;
  }

  getNodeStyleClass(dtoTree: Knot): string {

    let nodeStyle = 'node ';
    if (dtoTree instanceof Rule) {
      nodeStyle += "rule"
    }

    if (dtoTree instanceof Scenario) {
      nodeStyle += "scenario"
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
        postId: dtoTree.postId,
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

  getRootRule(): Observable<Rule> {
    let scen1 = new Scenario(
      1,
      undefined,
      'Younger than 20',
      'SCENARIO'
    );
    let scen2 = new Scenario(
      2,
      undefined,
      'Between 20/30',
      'SCENARIO'
    );
    let scen3 = new Scenario(
      3,
      undefined,
      'Older than 30',
      'SCENARIO'
    );

    let nextKnotAllocation1 = new NextKnotAllocation(
      1,
      'GREATER_THAN',
      '30',
      undefined,
      undefined,
      undefined,
      scen3
    );
    let nextKnotAllocation2 = new NextKnotAllocation(
      2,
      'ELSE',
      undefined,
      undefined,
      undefined,
      undefined,
      scen2
    );
    let rule2 = new Rule(4, undefined, 'Regel 2', 'NUMBER_RULE', false, 'AGE');
    rule2.addNextKnotAllocation(nextKnotAllocation1);
    rule2.addNextKnotAllocation(nextKnotAllocation2);

    let nextKnotAllocation3 = new NextKnotAllocation(
      3,
      'SMALLER_THAN',
      '20',
      undefined,
      undefined,
      undefined,
      scen1
    );
    let nextKnotAllocation4 = new NextKnotAllocation(
      4,
      'ELSE',
      undefined,
      undefined,
      undefined,
      undefined,
      rule2
    );

    let rootRule: Rule = new Rule(
      1,
      undefined,
      'Regel 1',
      'NUMBER_RULE',
      true,
      'AGE'
    );
    rootRule.addNextKnotAllocation(nextKnotAllocation3);
    rootRule.addNextKnotAllocation(nextKnotAllocation4);

    return of(rootRule);
    //return this.http.get<any[]>(environment.apiBaseUrl + '/api/gui/menu-items/all');
  }
}
