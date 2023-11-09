
export class EventModel {
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  locationId: number;

  constructor(name: string, description: string, date: string, startTime: string, endTime: string, locationId: number) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.locationId = locationId;
  }
}
