import { Rule } from './rule';
import { Step } from './step';

export class NextStepAllocation {
  public id: number;
  public allocationType: string; // greater than, smaller than, equals, isMemberOfEnum
  public compareValue: string;

  public idNextStep: number;
  public nextStepPostRef: number;

  public ownerStep: Rule;
  public nextStep: Step;

  constructor(
    id: number,
    allocationType: string,
    compareValue: string,
    idNextStep: number,
    nextStepPostRef: number,
    ownerStep: Rule,
    nextStep: Step
  ) {
    this.id = id;
    this.allocationType = compareValue;
    this.compareValue = compareValue;
    this.idNextStep = idNextStep;
    this.nextStepPostRef = nextStepPostRef;
    this.ownerStep = ownerStep;
    this.nextStep = nextStep;
  }
}
