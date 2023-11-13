import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth-service";
import {MatSnackBarService} from "../../shared/snack-bar/mat-snackbar.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private authService: AuthService, private snackBar: MatSnackBarService) {}

  onRegister() {
    this.authService.addUser(this.registerForm.value).subscribe(
      () => {
        this.snackBar.openSnackBar("Successfully registered")
      },
      error => {
        this.snackBar.openSnackBar(error)
      }
    );
  }


  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';
    let firstName = '';
    let lastName = '';
    let phoneNumber = '';

    this.registerForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required),
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'phoneNumber': new FormControl(phoneNumber, Validators.required),
    })
  }

}
