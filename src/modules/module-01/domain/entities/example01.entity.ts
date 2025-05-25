export class Example01 {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string
  ) {}

  static create(name: string, description: string): Example01 {
    const entity = new Example01(crypto.randomUUID(), name, description);

    entity.validate();

    return entity;
  }

  isNameValid(): void {
    if (!this.name) {
      throw new Error('Name is required');
    }

    if (this.name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  validate(): void {
    this.isNameValid();
  }
}
