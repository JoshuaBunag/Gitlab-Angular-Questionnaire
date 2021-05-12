import {Injectable} from '@angular/core';
import {Knot} from '../entities/knot';
import {Rule} from '@entities/rule';
import {NextKnotAllocation} from '@entities/next-knot-allocation';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  constructor() {
  }

  findNextKnot(treeKnots: Knot[], currentRule: Rule, answer: string): Knot {
    let allocationFound;
    currentRule.nextKnotAllocations.forEach((allocation) => {
      if (this.isAllocationMatching(allocation, answer)) {
        allocationFound = allocation;
      }
    });
    let elseAllocationMatches = currentRule.nextKnotAllocations.filter((allocation) => allocation.allocationType === 'ELSE_ALLOCATION');
    if (!allocationFound && elseAllocationMatches.length > 0) {
      allocationFound = elseAllocationMatches[0];
    }
    if (allocationFound) {
      return treeKnots.filter(knot => knot.id === allocationFound.idNextKnot)[0];
    }
    // TODO : show message that answer not matching anything where undefined returned
    return undefined;
  }

  isAllocationMatching(allocation: NextKnotAllocation, answer: string): boolean {
    // TODO : add constant (like enum) for allocation types
    // prevent else allocation matching, should be assigned explicit
    if (allocation.allocationType === 'ELSE_ALLOCATION') {
      return false;
    }

    // strings
    if (allocation.allocationType === 'IS_EQUAL_ALLOCATION') {
      return answer === allocation.compareValue;
    }
    if (allocation.allocationType === 'IS_EMPTY_ALLOCATION') {
      return !answer;
    }

    // numbers
    if (this.isNumber(answer)) {
      if (allocation.allocationType === 'NUMBER_SMALLER_ALLOCATION') {
        return Number(answer) < Number(allocation.compareValue);
      }
      if (allocation.allocationType === 'NUMBER_EQUAL_TO_OR_SMALLER_ALLOCATION') {
        return Number(answer) <= Number(allocation.compareValue);
      }
      if (allocation.allocationType === 'NUMBER_GREATER_ALLOCATION') {
        return Number(answer) > Number(allocation.compareValue);
      }
      if (allocation.allocationType === 'NUMBER_EQUAL_TO_OR_GREATER_ALLOCATION') {
        return Number(answer) >= Number(allocation.compareValue);
      }
    }
    return false;
  }

  // TODO : shift to helper class
  isNumber(val): boolean {
    return !isNaN(Number(val));
  }

}
