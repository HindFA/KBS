import { MatInputModule } from '@angular/material/input';
import { NgModule, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { LayoutModule } from './layout/layout.module'
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FQAComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { DialogElementsComponent } from './dialog-elements/dialog-elements.component';
import { Gard1Guard } from './guard.guard';
import { RegisterComponent } from './register/register.component';
import { AskquestionComponent } from './askquestion/askquestion.component';
import { ProfileComponent } from './profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { AnswerQuestionsComponent } from './answer-questions/answer-questions.component';
import { TopQustionsComponent } from './top-qustions/top-qustions.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    FQAComponent,
    LoginComponent,
    DialogElementsComponent,
    RegisterComponent,
    AskquestionComponent,
    ProfileComponent,

    AnswerQuestionsComponent,
    TopQustionsComponent,
    DisplayComponent,



  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    LayoutModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule.forRoot([

      {
        path: '', component: LoginComponent
      },
      {
        path: 'Register', component: RegisterComponent

      },
      {

        path: 'FAQ', component: FQAComponent

      },
      {
        path: 'Ask-question', component: AskquestionComponent
      },
      {
        path: 'Profile', component: ProfileComponent
      },

      {
        path: 'Top-questions', component: TopQustionsComponent
      },
      {
        path: 'Answer-Questions/:Qid', component: AnswerQuestionsComponent
      },
      {
        path: 'DisplayComponent', component: DisplayComponent

      }






    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
