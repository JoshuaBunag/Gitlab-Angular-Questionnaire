import { Rule } from './rule';
import { Knot } from './knot';

export class NextKnotAllocation {
  public id: number;
  public allocationType: string; // greater than, smaller than, equals, isMemberOfEnum
  public compareValue: string;

  public idNextKnot: number;

  public ownerKnot: Rule;
  public nextKnot: Knot;

}
