import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';
import { ServiceService } from '../servire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  password='';
  firstName='';
  lastName='';
  email='';
  constructor(private servier: ServiceService , private router: Router ,public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DialogElementsComponent,{
       data: {
      dataKey: "Email alrady exsist"
    }});
  }


  saveData(f:any)
  {
    console.log(f)
    if(f==true){
      this.servier.adduser(this.firstName,this.lastName,this.password, this.email).subscribe((userInfo) => {        }
        ,(er)=>{
          if (er instanceof HttpErrorResponse) {
      if(er.status==200){
        this.router.navigateByUrl('')
      }else{
        this.openDialog();
  
      }
          
          }
        });
    }
  
  }
}
