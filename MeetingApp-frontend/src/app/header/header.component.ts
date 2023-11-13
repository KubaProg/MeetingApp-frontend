import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthService) {}

  isAuthenticated: boolean = false;
  private subscription!: Subscription;

  onLogout() {
    this.authService.logoutUser();
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe(user => {
      if(user){
        this.isAuthenticated = true;
      }
      }
    )
  }
}
