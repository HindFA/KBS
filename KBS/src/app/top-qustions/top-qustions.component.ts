import { HttpResponse } from '@angular/common/http';
import { ServiceService } from './../servire.service';
import { qustion } from 'src/app/Model/Model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd ,Event} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-qustions',
  templateUrl: './top-qustions.component.html',
  styleUrls: ['./top-qustions.component.css']
})
export class TopQustionsComponent implements OnInit {

  constructor(private router: Router, private servier: ServiceService, private ac: ActivatedRoute) {
    this.router.events.pipe(
      filter((event: Event) => event instanceof RouterEvent)
    ).subscribe(() => {
      this.email = this.ac.snapshot.params['em'];

      this.servier.getqustions().subscribe((x: any) => {
        if (x instanceof HttpResponse) {
          this.q = x.body["content"] as qustion[];

        }
      });

    });

   }
  q: qustion[] = [];
  qq = '';

  id = '';
  dataqustions = '';
  dataanswer = '';
  user_name = '';
  qustions_name = '';
  qustions_title = '';
  answers = ''
  email?: string;
  ngOnInit(): void {
    // this.email = this.ac.snapshot.params['em'];

    // this.servier.getqustions().subscribe((x: any) => {
    //   if (x instanceof HttpResponse) {
    //     this.q = x.body["content"] as qustion[];

    //   }
    // });
  }

  Askquestion() {
    this.router.navigateByUrl('/Ask-question')
  };
}
