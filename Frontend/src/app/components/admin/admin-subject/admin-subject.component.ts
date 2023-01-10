import { Component } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-admin-subject',
  templateUrl: './admin-subject.component.html',
  styleUrls: ['./admin-subject.component.css']
})
export class AdminSubjectComponent {
  subject$ = [];
  filterSubject$ = [];

  constructor(private subjectService: SubjectService) {
    this.subjectService.getAll().subscribe(data => {
      this.subject$ = this.filterSubject$ = data;
    });
  }

  filter(query: number) {
    this.filterSubject$ = (query) ?
      this.subject$.filter(s => s.name == query) :
      this.subject$;
  }

}
