import { Knot } from '@entities/knot';
export class Scenario extends Knot {
    constructor(id: number, postId: number, name: string, knotType: string) {
        super(id, postId, name, knotType);      }
}
