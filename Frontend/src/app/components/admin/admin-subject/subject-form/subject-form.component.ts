import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {
  subject$ = {};
  id;

  constructor(private subjectService: SubjectService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.subject$ = this.subjectService.getById(this.id)
      .subscribe(subject => { this.subject$ = subject });
  }

  ngOnInit() { }

  save(form) {
    if (this.id) {
      this.subjectService.update(this.id, {
        name: form.name,
        department: form.department,
        instructor: form.instructor,
        classroom: form.classroom,
        semester: form.semester
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/admin-subject']);
        } else {
          alert(data.message);
        }
      });
    }
    else {
      this.subjectService.set({
        name: form.name,
        department: form.department,
        instructor: form.instructor,
        classroom: form.classroom,
        semester: form.semester
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/admin-subject']);
        } else {
          alert(data.message);
        }
      });
    }
  }

  delete() {
    this.subjectService.delete(this.id).subscribe(data => {
      this.router.navigate(['/admin-subject']);
    })
  }

}

