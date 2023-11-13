
export class EventModel {
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location_id: number;

  constructor(name: string, description: string, date: string, startTime: string, endTime: string, location_id: number) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location_id = location_id;
  }
}
