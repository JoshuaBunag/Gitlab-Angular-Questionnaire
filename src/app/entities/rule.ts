import { Step } from '@entities/step';
import { NextStepAllocation } from '@entities/next-step-allocation';

export class Rule extends Step{
  public start: boolean;
  public decisionFieldName: string;

  public children: NextStepAllocation[] = [];

  constructor(id: number, postRef: number, name: string, stepType: string, start: boolean, decisionFieldName: string) {
    super(id, postRef, name, stepType);
    this.start = start;
    this.decisionFieldName = decisionFieldName;
  }

  addNextStepAllocation(nextStepAllocation: NextStepAllocation) {
    this.children.push(nextStepAllocation);
  }
}
