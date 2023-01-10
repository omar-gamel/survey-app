import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  user$ = [];
  filterUser$ = [];

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe(data => {
      this.user$ = this.filterUser$ = data;
    });
  }

  ngOnInit() { }

  filter(query: number) {
    this.filterUser$ = (query) ?
      this.user$.filter(u => u.email == query) :
      this.user$;
  }

}
