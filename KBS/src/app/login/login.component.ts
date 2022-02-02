import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';

import { User } from '../Model/User';
import { ServiceService } from '../servire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  unabel = false ;
  password = ''
  email =''
  user?: User;
  constructor(private servier: ServiceService , private router: Router ,private s:ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {


  }
  openDialog() {
    this.dialog.open(DialogElementsComponent,{ data: {
      dataKey: "You Don't Have Account Please Sign Up"
    }});
  }
  submit (f:any){

    this.servier.checking(this.password, this.email).subscribe(userInfo => {
      if (userInfo instanceof HttpResponse) {

        this.user = userInfo.body as User;
        localStorage.setItem('email', this.user.email);
    
      this.router.navigateByUrl('/FAQ')

      }


    }, error => {
      if (error instanceof HttpErrorResponse) {

        this.openDialog() ;

      }

    });}
  }


