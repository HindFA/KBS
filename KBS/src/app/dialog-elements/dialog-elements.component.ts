import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.css']
})
export class DialogElementsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogElementsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
