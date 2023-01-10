import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: User;

  constructor(private userService: UserService, private auth: AuthService) {
    if (this.auth.isLogin()) {
      this.userService.getCurrentUser().subscribe(data => {
        (data.user) ? this.appUser = data.user : alert('Server Error ,Please Try Again');
      });
    }

    this.auth.getUser().subscribe(user => {
      this.appUser = user;
    });
  }

  logout() {
    this.auth.logout();
  }

}
