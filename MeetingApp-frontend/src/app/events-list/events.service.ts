import { Injectable } from '@angular/core';
import {EventModel} from "../shared/event.model";
import {catchError, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth-service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  eventsChanged = new Subject<EventModel[]>();
  constructor(private http: HttpClient, private authService: AuthService) { }

  // events = [
  //   new EventModel('Event 1', 'Date 1', 'Category 1', 100, 23),
  //   new EventModel('Event 2', 'Date 2', 'Category 2', 150, 11),
  //   new EventModel('Event 3', 'Date 3', 'Category 3', 80, 55)
  // ];

  getAllEvents(){
    return this.http.get<EventModel[]>('http://localhost:8080/api/v1/events')
      .pipe(catchError((error) => {
        return this.authService.handleError(error);
      }))
  }


  // setEvents(){
  //   this.eventsChanged.next(this.events.slice())
  // }
  //
  // getEvents() {
  //   return this.events.slice();
  // }
}
