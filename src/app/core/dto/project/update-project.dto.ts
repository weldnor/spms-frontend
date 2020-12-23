export class UpdateProjectDto {
  name: string;
  ownerId: number;
  description: string;

  constructor(name: string, ownerId: number, description: string) {
    this.name = name;
    this.ownerId = ownerId;
    this.description = description;
  }
}
