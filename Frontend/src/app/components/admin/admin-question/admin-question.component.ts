import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-admin-question',
  templateUrl: './admin-question.component.html',
  styleUrls: ['./admin-question.component.css']
})
export class AdminQuestionComponent {
  question$ = [];
  filterQuestion$ = [];

  constructor(private questionService: QuestionService) {
    this.questionService.getAll().subscribe(data => {
      this.question$ = this.filterQuestion$ = data;
    });
  }

  filter(query: number) {
    this.filterQuestion$ = (query) ?
      this.question$.filter(p => p.type == query) :
      this.question$;
  }

}
