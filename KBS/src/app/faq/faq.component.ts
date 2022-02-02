import { PostAanswer } from './../Model/PostAanswer';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { qustion } from 'src/app/Model/Model';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, Event } from '@angular/router';
import { ServiceService } from '../servire.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-fqa',
  templateUrl: './faq.component.html',

  styleUrls: ['./faq.component.css']
})


export class FQAComponent implements OnInit {
  panelOpenState = false;
  constructor(private servier: ServiceService, private router: Router, private ac: ActivatedRoute) {
    this.router.events.pipe(
      filter((event: Event) => event instanceof RouterEvent)
    ).subscribe(() => {
      this.servier.getqustions().subscribe((x: any) => {
        if (x instanceof HttpResponse) {
          this.q = x.body["content"] as qustion[];
        }
      });

    });


   }
  q: qustion[] = [];
  p: PostAanswer[] = []
  qq = '';
  user_name = '';
  id = 0

  ngOnInit() {

    // this.servier.getqustions().subscribe((x: any) => {
    //   if (x instanceof HttpResponse) {
    //     this.q = x.body["content"] as qustion[];
    //   }
    // });
  }

  UnansweredQuestions() {
    this.router.navigateByUrl('/Top-questions');
  }
  Askquestion() {
    this.router.navigateByUrl('/Ask-question');
  }

}

