import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  onLogout(){  
    this.router.navigateByUrl('')
  }  
  profile(){

    this.router.navigateByUrl('/Profile')
  }
  Askquestion(){

    this.router.navigateByUrl('/Ask-question')
  }
  AllQustion()
  {
    this.router.navigateByUrl('/FAQ')

  }
}
