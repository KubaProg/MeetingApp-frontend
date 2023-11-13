import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UserModel} from "../shared/user.model";
import {AuthService} from "./auth-service";
import {catchError, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  putUserById(id: number, userUpdateBody: UserModel){
    return this.http.put<UserModel>(`${environment.API_URL}/api/v1/users/${id}`,userUpdateBody)
      .pipe(catchError(errorResponse => {
        return this.authService.handleError(errorResponse)
      }))
  }

}
