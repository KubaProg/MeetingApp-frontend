import { Injectable } from '@angular/core';
import {EventModel} from "../shared/event.model";
import {catchError, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth-service";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllEvents(){
    return this.http.get<EventModel[]>(`${environment.API_URL}/api/v1/events`)
      .pipe(catchError((error) => {
        return this.authService.handleError(error);
      }))
  }

  createEvent(event: EventModel){
    return this.http.post<EventModel>(`${environment.API_URL}/api/v1/event`, event)
      .pipe(catchError(errorResponse => {
        return this.authService.handleError(errorResponse);
      }))
  }





}
