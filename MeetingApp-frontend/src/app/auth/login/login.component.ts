import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth-service";
import {MatSnackBarService} from "../../shared/snack-bar/mat-snackbar.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private snackBar: MatSnackBarService, private router: Router) {}

  logForm! : FormGroup;

  onSubmitLogin() {
    this.authService.logInUser(this.logForm.value).subscribe(
      () => {
        this.snackBar.openSnackBar("Successfully logged in")
        this.router.navigate([''])
      },
      error => {
        this.snackBar.openSnackBar(error);
      }
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let username = '';
    let password = '';

    this.logForm = new FormGroup({
      'username': new FormControl(username, Validators.required),
      'password': new FormControl(password, Validators.required)
    })
  }

}
