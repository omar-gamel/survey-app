import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { Observable, Subject } from "rxjs";
import { User } from "../models/user.model";

const BASE_URL = "http://localhost:5000";

@Injectable()
export class AuthService {
  appUser = new Subject<any>();
  isAdmin: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  login(email, password) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    this.http
      .post<{ success: boolean; message: string; token: string; user: User }>(
        `${ BASE_URL }/user/login`,
        { email, password },
        { headers: headers }
      )
      .subscribe((data) => {
        if (!data.success) {
          alert(data.message);
        } else {
          localStorage.setItem("token", data.token);
          this.appUser.next(data.user);
          this.router.navigate(["/home"]);
        }
      });
  }

  logout() {
    this.appUser.next(null);
    localStorage.setItem("token", null);
    this.router.navigate(["/login"]);
  }

  getUser(): Observable<any> {
    return this.appUser;
  }

  isLogin() {
    const token = localStorage.getItem("token");
    return token !== "null";
  }
}
