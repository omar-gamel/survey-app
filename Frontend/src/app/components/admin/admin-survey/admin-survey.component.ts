import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-admin-survey',
  templateUrl: './admin-survey.component.html',
  styleUrls: ['./admin-survey.component.css']
})
export class AdminSurveyComponent {
  subject$ = [];
  filterSubject$ = [];

  constructor(private subjectService: SubjectService) {
    this.subjectService.getAll().subscribe(data => {
      this.subject$ = this.filterSubject$ = data;
    });
  }

  filter(query: string) {
    this.filterSubject$ = (query) ?
      this.subject$.filter(s => s.name == query) :
      this.subject$;
  }

}
