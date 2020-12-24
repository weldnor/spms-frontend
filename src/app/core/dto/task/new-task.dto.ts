export class NewTaskDto {
  projectId: number;
  creatorId: number;
  name: string;
  description: string;
  statusId: number;

  constructor(projectId: number, creatorId: number, name: string, description: string, statusId: number) {
    this.projectId = projectId;
    this.creatorId = creatorId;
    this.name = name;
    this.description = description;
    this.statusId = statusId;
  }
}
