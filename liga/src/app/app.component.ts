import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liga';

  constructor(private authService: AuthService) {}

  isAuthenticated$ = this.authService.isAuthenticated$;
  isLoading = this.authService.isLoading$; 
  logAuthState(isAuthenticated: boolean) {
  console.log('Is Authenticated:', isAuthenticated);
}

}

