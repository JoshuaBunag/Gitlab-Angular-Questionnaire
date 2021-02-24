export abstract class Step {
  public id: number;
  public postRef: number;
  public name: string;
  public stepType: string; // number, string, enum

  constructor(id: number, postRef: number, name: string, stepType: string) {
    this.id = id;
    this.postRef = postRef;
    this.name = name;
    this.stepType = stepType;
  };
}
