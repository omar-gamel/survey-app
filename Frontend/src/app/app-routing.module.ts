import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";
import { SurveyComponent } from "./components/survey/survey.component";
import { AdminAuthGuardService } from "./services/admin-auth-guard.service";
import { AdminComponent } from "./components/admin/admin.component";
import { AdminUserComponent } from "./components/admin/admin-user/admin-user.component";
import { UserFormComponent } from "./components/admin/admin-user/user-form/user-form.component";
import { AdminSubjectComponent } from "./components/admin/admin-subject/admin-subject.component";
import { SubjectFormComponent } from "./components/admin/admin-subject/subject-form/subject-form.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { SurveySubjectComponent } from "./components/survey-subject/survey-subject.component";
import { AdminQuestionComponent } from "./components/admin/admin-question/admin-question.component";
import { QuestionFormComponent } from "./components/admin/admin-question/question-form/question-form.component";
import { SurveyQuestionComponent } from "./components/survey-question/survey-question.component";
import { ChartsComponent } from "./components/charts/charts.component";
import { AdminSurveyComponent } from "./components/admin/admin-survey/admin-survey.component";
import { SurveyFormComponent } from "./components/admin/admin-survey/survey-form/survey-form.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  {
    path: "change-password",
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService],
    data: { title: "Change Password" },
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    data: { title: "Profile" },
  },
  {
    path: "survey-subject",
    component: SurveySubjectComponent,
    canActivate: [AuthGuardService],
    data: { title: "Subject" },
  },
  { path: "contact", component: ContactComponent, data: { title: "Contact" } },
  {
    path: "survey",
    component: SurveyComponent,
    canActivate: [AuthGuardService],
    data: { title: "Survey" },
  },
  {
    path: "questions",
    component: SurveyQuestionComponent,
    data: { title: "Survey" },
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "admin-question",
    component: AdminQuestionComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "question-form",
    component: QuestionFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "question-form/:id",
    component: QuestionFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "admin-user",
    component: AdminUserComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "user-form",
    component: UserFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "user-form/:id",
    component: UserFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "admin-subject",
    component: AdminSubjectComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "subject-form",
    component: SubjectFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "subject-form/:id",
    component: SubjectFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "admin-survey",
    component: AdminSurveyComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
  {
    path: "survey-form/:subjectId",
    component: SurveyFormComponent,
    canActivate: [AuthGuardService, AdminAuthGuardService],
    data: { title: "Admin" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
