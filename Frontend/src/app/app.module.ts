import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomFormsModule } from 'ng2-validation';
import { ChartsModule } from 'ng2-charts';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { BsFooterComponent } from './components/bs-footer/bs-footer.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SurveyComponent } from './components/survey/survey.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AuthService } from './services/auth.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserComponent } from './components/admin/admin-user/admin-user.component';
import { UserFormComponent } from './components/admin/admin-user/user-form/user-form.component';
import { UserService } from './services/user.service';
import { AdminSubjectComponent } from './components/admin/admin-subject/admin-subject.component';
import { SubjectFormComponent } from './components/admin/admin-subject/subject-form/subject-form.component';
import { SubjectService } from './services/subject.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SurveySubjectComponent } from './components/survey-subject/survey-subject.component';
import { QuestionService } from './services/question.service';
import { AdminQuestionComponent } from './components/admin/admin-question/admin-question.component';
import { QuestionFormComponent } from './components/admin/admin-question/question-form/question-form.component';
import { SurveyQuestionComponent } from './components/survey-question/survey-question.component';
import { SurveyService } from './services/survey.service';
import { AdminSurveyComponent } from './components/admin/admin-survey/admin-survey.component';
import { SurveyFormComponent } from './components/admin/admin-survey/survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    BsFooterComponent,
    BsNavbarComponent,
    LoginComponent,
    ChangePasswordComponent,
    SurveyComponent,
    SurveyQuestionComponent,
    AdminQuestionComponent,
    QuestionFormComponent,
    ChartsComponent,
    AdminComponent,
    AdminUserComponent,
    UserFormComponent,
    AdminSubjectComponent,
    SubjectFormComponent,
    SurveySubjectComponent,
    AdminSurveyComponent,
    SurveyFormComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,      
    ReactiveFormsModule,
    CustomFormsModule,
    ChartsModule,
  ],
  providers: [
    QuestionService, 
    AuthService, 
    AdminAuthGuardService, 
    UserService, 
    SubjectService, 
    AuthGuardService,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
