import { Step } from '@entities/step';
export class Scenario extends Step {
    constructor(id: number, postRef: number, name: string, stepType: string) {
        super(id, postRef, name, stepType);      }
}