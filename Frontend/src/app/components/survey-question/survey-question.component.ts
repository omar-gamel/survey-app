import { Component } from "@angular/core";
import { QuestionService } from "src/app/services/question.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SubjectService } from "src/app/services/subject.service";
import { Subject } from "src/app/models/subject.model";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { SurveyService } from "src/app/services/survey.service";
import { UserService } from "src/app/services/user.service";

interface Survey {
  questionId: any;
  choose: any;
}

@Component({
  selector: "app-survey-question",
  templateUrl: "./survey-question.component.html",
  styleUrls: ["./survey-question.component.css"],
})
export class SurveyQuestionComponent {
  questions$ = [];
  subject$: Subject;
  survey = [];

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService,
    private surveyService: SurveyService,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.questionService
        .getByType(params.surveyType)
        .subscribe((questions) => {
          this.questions$ = questions;
        });
      this.subjectService.getById(params.subjectId).subscribe((subject) => {
        this.subject$ = subject;
      });
    });
  }

  choose(id, choose) {
    let result = this.survey.findIndex((survey) => {
      return survey.question == id;
    });
    if (result === -1) {
      this.survey.push({ question: id, choose: choose });
    } else {
      this.survey[result] = { question: id, choose: choose };
    }
  }

  save() {
    const conf = confirm("Do You Want To Save The Questionnaire?");
    if (conf)
      this.userService
        .setAnsweredSubject(this.subject$._id)
        .subscribe((data) => {
          if (data.success) {
            this.surveyService
              .set(this.subject$._id, this.survey)
              .subscribe((data) => {
                if (data.success) {
                  this.router.navigate(["/survey"]);
                } else {
                  alert("Server Error ,Please Try Again");
                }
              });
          }
        });
  }
}
