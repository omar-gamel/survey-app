import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { SubjectService } from 'src/app/services/subject.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-subject',
  templateUrl: './survey-subject.component.html',
  styleUrls: ['./survey-subject.component.css']
})
export class SurveySubjectComponent implements OnInit {
  appUser: User;
  subjects = [];
  params;
  surveyType;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private subjectService: SubjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.auth.isLogin()) {
      this.userService.getCurrentUser().subscribe(data => {
        (data.user) ? this.appUser = data.user : alert('Server Error ,Please Try Again');
      });
    }

    this.auth.getUser().subscribe(user => {
      this.appUser = user;
    });

    this.subjectService.getUserSubject().subscribe(data => {
      if (data.success) {
        data.subjects.forEach(subject => {
          // if(!this.appUser.isAnswered.includes(subject._id))
              this.subjects.push(subject);
        })
      } else {
        alert(data.message);
      }
    });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.surveyType = params.surveyType;
      });
  }

  goToPage(subjectId) {
    this.router.navigate(['/questions'], { queryParams: { subjectId: subjectId, surveyType: this.surveyType } });
  }
}
