import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const BASE_URL = "http://localhost:5000";

@Injectable()
export class SurveyService {
  constructor(private http: HttpClient) {}

  set(id, survey): Observable<{ success: boolean; message: string }> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<{ success: boolean; message: string }>(
      `${ BASE_URL }/survey/create/${id}`,
      { survey },
      { headers: headers }
    );
  }

  getBySubjectId(
    id
  ): Observable<{ success: boolean; message: string; survey: any }> {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get<{ success: boolean; message: string; survey: any }>(
      `${ BASE_URL }/survey/${id}`,
      { headers: headers }
    );
  }

  getCount(subjectId, questionId) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.get<{ result: []; count: number }>(
      `${ BASE_URL }/survey/${subjectId}/${questionId}`,
      { headers: headers }
    );
  }
}
