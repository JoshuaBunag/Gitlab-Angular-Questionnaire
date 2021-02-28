import { Rule } from './rule';
import { Knot } from './knot';

export class NextKnotAllocation {
  public id: number;
  public allocationType: string; // greater than, smaller than, equals, isMemberOfEnum
  public compareValue: string;

  public idNextKnot: number;
  public nextKnotPostId: number;

  public ownerKnot: Rule;
  public nextKnot: Knot;

  constructor(
    id: number,
    allocationType: string,
    compareValue: string,
    idNextKnot: number,
    nextKnotPostId: number,
    ownerKnot: Rule,
    nextKnot: Knot
  ) {
    this.id = id;
    this.allocationType = compareValue;
    this.compareValue = compareValue;
    this.idNextKnot = idNextKnot;
    this.nextKnotPostId = nextKnotPostId;
    this.ownerKnot = ownerKnot;
    this.nextKnot = nextKnot;
  }
}
