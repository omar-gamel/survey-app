import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from "../models/subject.model";

const BASE_URL = "http://localhost:5000";

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) { }
  index: number;

  subject$ = [
    {
      id: 1,
      name: 'الذكاء الاصطناعي',
      department: 'علوم حاسب',
      instructor: 'احمد فؤاد',
      classroom: 4,
      semester: 2
    },
    {
      id: 2,
      name: 'قاعدة البيانات',
      department: 'نظم المعلومات',
      instructor: 'محمد طاحون',
      classroom: 4,
      semester: 2
    },
    {
      id: 3,
      name: 'هيكل البيانات',
      department: 'عام',
      instructor: 'احمد صبحي',
      classroom: 2,
      semester: 2
    }
  ];

  set(subject) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<{ success: boolean, message: string }>(`${ BASE_URL }/subject/create`, { ...subject }, { headers: headers });
  }

  getAll(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${ BASE_URL }/subject/all`);
  }

  getById(id): Observable<Subject> {
    return this.http.get<Subject>(`${ BASE_URL }/subject/${id}`);
  }

  update(id, newSubject): Observable<{ success: boolean, message: string }> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<{ success: boolean, message: string }>(`${ BASE_URL }/subject/${id}`, { ...newSubject }, { headers: headers });
  }

  delete(id) {
    return this.http.delete<Subject>(`${ BASE_URL }/subject/${id}`);
  }

  getUserSubject(): Observable<{ success: string, message: string, subjects: Subject[] }> {
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    const httpOptions = { headers: headers_object };
    return this.http.get<{ success: string, message: string, subjects: Subject[] }>(`${ BASE_URL }/subject`, httpOptions);
  }
}
