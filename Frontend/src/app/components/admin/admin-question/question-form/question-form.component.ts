import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  question$ = {};
  id;

  constructor(
    private questionService: QuestionService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.question$ = this.questionService.getById(this.id)
      .subscribe(question => { 
        this.question$ = question 
      });
  }

  ngOnInit() { }

  save(form) {
    if (this.id) {
      this.questionService.update(this.id, {
        name: form.questionName,
        type: form.type
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/admin-question']);
        } else {
          alert(data.message);
        }
      });
    }
    else {
      this.questionService.set({
        name: form.questionName,
        type: form.type
      }).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/admin-question']);
        } else {
          alert(data.message);
        }
      });
    }
  }

  delete() {
    this.questionService.delete(this.id).subscribe(data => {
      this.router.navigate(['/admin-question']);
    })
  }


}
