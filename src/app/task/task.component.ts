import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import{ManagementTasksService} from '../shared/services/management-tasks.service';
import { Task } from '../shared/models/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  formTemplate = new FormGroup({
    titre: new FormControl(''),
    description: new FormControl(''),
    datedebut: new FormControl(''),
    dateecheance: new FormControl(''),
    statut: new FormControl(''),
    statutModif : new FormControl(''),
    
  });



  constructor(private servTask: ManagementTasksService, private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<TaskComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {

    this.formTemplate = this._formBuilder.group({
      titre: [this.data.titre, Validators.required],
      description: [this.data.description],
      datedebut: [this.data.debut],
      dateecheance:[this.data.fin],
      statut: [this.data.statut],
      statutModif:[this.data.statmodf],
                                                });

                    }
 


  save(formValue:any){ debugger;
                    this.servTask.addTask(formValue);
                    this.onClick();
  }



  onClick(): void {
    this.dialogRef.close();
  }





}
