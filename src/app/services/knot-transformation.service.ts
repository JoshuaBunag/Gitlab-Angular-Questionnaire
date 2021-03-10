import { Injectable } from '@angular/core';
import { Knot } from '@entities/knot';
import { Rule } from '../entities/rule';
import { Scenario } from '../entities/scenario';
import { NextKnotAllocation } from '../entities/next-knot-allocation';
@Injectable({
  providedIn: 'root',
})
export class KnotTransformationService {
  constructor() {}

  convertTreeKnots(treeKnots: Knot[]): Knot[] {
    let treeKnotList: Knot[] = [];
    for (let treeKnotRaw of treeKnots) {
      let treeKnot: Knot;
      
      if (treeKnotRaw.knotType == 'SCENARIO') {
        treeKnot = new Scenario();
      } else {
        let rule = new Rule();
        rule.start = treeKnotRaw['start'];  
        rule.decisionFieldName = treeKnotRaw['decisionFieldName'];
        rule.nextKnotAllocations = [];

        for(let nextKnotAllocationRaw of treeKnotRaw['nextKnots']) {
          let nextKnotAllocation = new NextKnotAllocation();
          nextKnotAllocation.id = nextKnotAllocationRaw.id;
          nextKnotAllocation.allocationType = nextKnotAllocationRaw.allocationType;
          nextKnotAllocation.compareValue = nextKnotAllocationRaw.compareValue;
          nextKnotAllocation.idNextKnot = nextKnotAllocationRaw.idNextKnot;
          rule.nextKnotAllocations.push(nextKnotAllocation);
        }
        treeKnot = rule;
      }
      treeKnot.id = treeKnotRaw.id;  
      treeKnot.name = treeKnotRaw.name;  
      treeKnot.knotType = treeKnotRaw.knotType;
      treeKnotList.push(treeKnot);
    }
    return treeKnotList;
  }
}
