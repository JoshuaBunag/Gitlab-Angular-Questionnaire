import { Knot } from '@entities/knot';
import { NextKnotAllocation } from '@entities/next-knot-allocation';

export class Rule extends Knot{
  public start: boolean;
  public decisionFieldName: string;

  public children: NextKnotAllocation[] = [];

  constructor(id: number, postId: number, name: string, knotType: string, start: boolean, decisionFieldName: string) {
    super(id, postId, name, knotType);
    this.start = start;
    this.decisionFieldName = decisionFieldName;
  }

  addNextKnotAllocation(nextKnotAllocation: NextKnotAllocation) {
    this.children.push(nextKnotAllocation);
  }
}
