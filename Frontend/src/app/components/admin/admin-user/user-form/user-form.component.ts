import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

const URL = "http://localhost:4000/api/upload";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent {
  private selectedFile: File;
  user$ = {};
  id;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.userService.getById(this.id).subscribe((res) => {
        this.user$ = res.user;
      });
  }

  fileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  save(form) {
    if (this.id) {
      this.userService
        .update(this.id, {
          name: form.name,
          email: form.email,
          password: form.password,
          department: form.department,
          classroom: form.classroom,
          semester: form.semester,
          city: form.city,
          avatar: this.selectedFile.name,
          mobile: form.mobile,
        })
        .subscribe((data) => {
          if (data.success) {
            this.router.navigate(["/admin-user"]);
          } else {
            alert(data.message);
          }
        });
    } else {
      this.userService
        .set({
          name: form.name,
          email: form.email,
          password: form.password,
          department: form.department,
          classroom: form.classroom,
          semester: form.semester,
          city: form.city,
          avatar: this.selectedFile,
          mobile: form.mobile,
        })
        .subscribe((data) => {
          if (data.success) {
            this.router.navigate(["/admin-user"]);
          } else {
            alert(data.message);
          }
        });
    }
  }

  delete() {
    this.userService.delete(this.id).subscribe((data) => {
      this.router.navigate(["/admin-user"]);
    });
  }
}
