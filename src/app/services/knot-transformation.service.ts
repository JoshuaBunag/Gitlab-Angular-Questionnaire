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
        rule.fieldName = treeKnotRaw['fieldName'];
        rule.nextKnotAllocations = [];

        for (let nextKnotAllocRaw of treeKnotRaw['nextKnots']) {
          let nextKnotAlloc = new NextKnotAllocation();
          nextKnotAlloc.id = nextKnotAllocRaw.id;
          nextKnotAlloc.allocationType = nextKnotAllocRaw.allocationType;
          nextKnotAlloc.compareValue = nextKnotAllocRaw.compareValue;
          nextKnotAlloc.idNextKnot = nextKnotAllocRaw.idNextKnot;
          rule.nextKnotAllocations.push(nextKnotAllocRaw);
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
