import { HttpResponse } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servire.service';
import { qustion } from '../Model/Model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {

  q: qustion[] = [];
  qq = '';
  title = '';
  email: any = '';
  isDisabled: boolean = false;
  constructor(private servier: ServiceService, private router: Router, private ac: ActivatedRoute) { }

  ngOnInit(): void { }

  Post(){
    this.email = localStorage.getItem('email');
    this.servier.createQustions(this.email, this.qq, this.title).subscribe((ev) => {
      if (ev instanceof HttpResponse) {
        console.log("Done");
      }
    })
  this.router.navigate(['/Top-questions']);
  }
}
