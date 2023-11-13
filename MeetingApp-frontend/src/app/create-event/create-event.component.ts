import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBarService} from "../shared/snack-bar/mat-snackbar.service";
import {AuthService} from "../services/auth-service";
import {EventsService} from "../services/events.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createEventForm!: FormGroup;

  constructor(private authService: AuthService, private snackBar: MatSnackBarService,
              private eventsService: EventsService) {}



  onCreateEvent() {
    this.eventsService.createEvent(this.createEventForm.value)
      .subscribe();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let name = '';
    let description = '';
    let date = '';
    let startTime = '';
    let endTime = '';
    let location_id = 0; // You can set a default value or leave it empty

    this.createEventForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'date': new FormControl(date, Validators.required),
      'startTime': new FormControl(startTime, Validators.required),
      'endTime': new FormControl(endTime, Validators.required),
      'location_id': new FormControl(location_id, Validators.required)
    });

  }
}
