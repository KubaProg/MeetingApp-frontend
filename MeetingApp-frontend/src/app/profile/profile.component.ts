import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "../shared/user.model";
import {AuthService} from "../services/auth-service";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{

  profileForm!: FormGroup;
  user!: UserModel;
  userSubscription!: Subscription;
  editMode: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService , private userService: UserService ) {
   this.userSubscription = authService.user
     .subscribe(user => {
       this.user = user;
       }
     )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onEditProfile() {
    this.editMode = true;
    this.initForm();
  }

  initForm() {
    this.profileForm = this.fb.group({
      username: [this.user.username, [Validators.required]],
      password: [this.user.password, [Validators.required]],
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      phoneNumber: [this.user.phoneNumber, [Validators.required]],
    });
  }

  onSubmit() {
      this.userService.putUserById(this.user.id, this.profileForm.value).subscribe(updatedUser => {
        this.authService.user.next(updatedUser);
      });
  }

}
