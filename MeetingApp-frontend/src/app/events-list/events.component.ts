import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventsService} from "../services/events.service";
import {Subscription} from "rxjs";
import {EventModel} from "../shared/event.model";

@Component({
  selector: 'app-events-list',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy{

  events?: EventModel[];
  subscription!: Subscription;


  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.subscription = this.eventService
      .getAllEvents()
      .subscribe(eventsReponse => {
        this.events = eventsReponse;
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
