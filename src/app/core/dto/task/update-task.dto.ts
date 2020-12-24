export class UpdateTaskDto {
  name: string;
  description: string;
  statusId: number;


  constructor(name: string, description: string, statusId: number) {
    this.name = name;
    this.description = description;
    this.statusId = statusId;
  }
}
