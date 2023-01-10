import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  Input,
} from "@angular/core";
import { Chart } from "chart.js";
import { Question } from "src/app/models/question.model";
import { ActivatedRoute } from "@angular/router";
import { SurveyService } from "src/app/services/survey.service";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent {
  @ViewChild("canvas") canvas: ElementRef;
  @Input() question: Question;
  chart: any = [];
  result = [];
  id;

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.paramMap.get("subjectId");
    setTimeout(() => this.getCount(), 0);
  }

  getCount() {
    this.surveyService
      .getCount(this.id, this.question._id)
      .subscribe((data) => {
        this.drow(data.result);
      });
  }

  drow(data) {
    let ctx = <HTMLCanvasElement>this.canvas.nativeElement.getContext("2d");
    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "موافق تماما",
          "موافق",
          "محايد",
          "غير موافق",
          "غير موافق تماما",
        ],
        datasets: [
          {
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#e8c3b9",
              "#c45850",
            ],
            data: data,
          },
        ],
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "",
        },
      },
    });
    this.changeDetectorRef.detectChanges();
  }
}
