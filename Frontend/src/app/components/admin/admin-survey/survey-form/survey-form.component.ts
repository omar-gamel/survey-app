import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  questions = [];
  answers = [];
  subject$ = {};
  id;

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private surveyService: SurveyService
  ) {
    this.id = this.route.snapshot.paramMap.get('subjectId');
    if (this.id) this.subject$ = this.subjectService.getById(this.id)
      .subscribe(subject => { this.subject$ = subject });

    this.questionService.getByType(5).subscribe(questions => {
      this.questions = questions;
    });

    this.surveyService.getBySubjectId(this.id).subscribe(data => {
      if (data.success) {
        this.answers = data.survey;
      } else {
        alert(data.message)
      }
    });
  }
}
