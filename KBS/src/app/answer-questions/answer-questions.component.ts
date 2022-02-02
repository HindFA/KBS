import { answer } from 'src/app/Model/AnswersModel';
import { qustion } from 'src/app/Model/Model';
import { User } from './../Model/User';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../servire.service';
import { HttpResponse } from '@angular/common/http';
import { PostAanswer } from '../Model/PostAanswer';



@Component({
  selector: 'app-answer-questions',
  templateUrl: './answer-questions.component.html',
  styleUrls: ['./answer-questions.component.css']
})

export class AnswerQuestionsComponent implements OnInit {
  isDisabled = false;
  constructor(private router: Router, private servier: ServiceService, private ac: ActivatedRoute) { }
  a: answer = {};
  email: any = '';
  answer: string = '';
  q: qustion = {};
  id: Number = 0;
  u: User[] = [];
  p: PostAanswer = {};

  // call get q by id
  ngOnInit(): void {
    this.id = this.ac.snapshot.params['Qid'];

    this.servier.findOne(this.id).subscribe(x => {
      if (x instanceof HttpResponse)
        this.q = x.body as qustion;

    });
  }



  //Answer
  Post() {
    this.id = this.ac.snapshot.params['Qid'];
    this.email = localStorage.getItem('email');
    this.q.id = this.id;
    this.q.user_qustion = this.q.user_qustion;
    this.q.qustions = this.q.qustions_title;
    this.q.qustions = this.q.qustions;
    this.q.date = this.q.date;
    this.servier.postAnswering(this.email, this.answer, this.q).subscribe((ev) => {

      if (ev instanceof HttpResponse) {

        console.log("Done");

      }
    }
    )

    this.router.navigate(['/FAQ']);
  }


}