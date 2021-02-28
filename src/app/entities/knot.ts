export abstract class Knot {
  public id: number;
  public postId: number;
  public name: string;
  public knotType: string; // number, string, enum

  constructor(id: number, postId: number, name: string, knotType: string) {
    this.id = id;
    this.postId = postId;
    this.name = name;
    this.knotType = knotType;
  };
}
