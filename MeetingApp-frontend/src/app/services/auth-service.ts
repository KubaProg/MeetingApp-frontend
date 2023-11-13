import { Injectable } from '@angular/core';
import {UserModel} from "../shared/user.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<UserModel>(null!);
  constructor(private http: HttpClient, private router: Router) {}

  addUser(usermodel : UserModel){
    return this.http.post<UserModel>(`${environment.API_URL}/api/v1/users`, usermodel)
      .pipe(catchError(errorResponse => {
          return this.handleError(errorResponse);
        }),
        tap(responseData => {
          this.handleAuthentication(responseData)
        }));
  }

  logInUser(credentials: {username: String, password: String}){
    return this.http.post<UserModel>(`${environment.API_URL}/api/v1/auth/login`, credentials)
      .pipe(catchError(errorResponse => {
        return this.handleError(errorResponse)
      }),
      tap(responseData =>{
        this.handleAuthentication(responseData);
      }));
  }

  logoutUser()
  {
    this.user.next(null!);
    this.router.navigate(['login'])
    localStorage.removeItem('userData')
  }
  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (!errorResponse.error || !errorResponse.error.message) {
      return throwError(errorMessage);
    }

    errorMessage = errorResponse.error.message;

    return throwError(errorMessage);
  }

  private handleAuthentication(userModel: UserModel) {
    this.user.next(userModel);
    localStorage.setItem("userData", JSON.stringify(userModel))
  }

  autoLogin() {
    const userData: {
      id: number;
      username: string;
      password: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      roleIds: number[];
      jwtToken: string;
    } = JSON.parse(localStorage.getItem('userData')!);

    if (!userData || !userData.jwtToken) {
      return;
    }

    const loadedUser = new UserModel(
      userData.id,
      userData.username,
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.phoneNumber,
      userData.roleIds,
      userData.jwtToken
    );

    this.user.next(loadedUser);
  }

}
