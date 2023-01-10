import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
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

  save(form) {
    this.userService.changePassword(form).subscribe(data => {
      if (data.success) {
        this.auth.logout();
      } else {
        alert(data.message)
      }
    });
  }

}
