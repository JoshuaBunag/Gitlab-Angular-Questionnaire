import { Knot } from '@entities/knot';
import { NextKnotAllocation } from '@entities/next-knot-allocation';

export class Rule extends Knot{
  public start: boolean;
  public decisionFieldName: string;

  public nextKnotAllocations: NextKnotAllocation[] = [];

  addNextKnotAllocation(nextKnotAllocation: NextKnotAllocation) {
    this.nextKnotAllocations.push(nextKnotAllocation);
  }
}
