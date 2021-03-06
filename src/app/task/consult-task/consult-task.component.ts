import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-consult-task',
  templateUrl: './consult-task.component.html',
  styleUrls: ['./consult-task.component.css']
})
export class ConsultTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsultTaskComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }


  onClick(): void {
    this.dialogRef.close();
  }


}
