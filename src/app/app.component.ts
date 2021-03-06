import { Component,ViewChild,AfterViewInit, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TaskComponent}  from './task/task.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Task} from './shared/models/task';
import { ConsultTaskComponent } from './task/consult-task/consult-task.component';
import{ManagementTasksService} from './shared/services/management-tasks.service';
import { Observable, Subscription, from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  tasks ?: Task[];
  newTask = new Task();
  displayedColumns: string[] = ['titre',  'datedebut', 'dateecheance','description','statut','Action'];
  dataSource ?: any;
 


  constructor(public dialog: MatDialog, private servTask: ManagementTasksService) {
    // 
    
  }


ngOnInit()  {  this.getAllTask();   }


getAllTask(){
               

        this.servTask.getTasks().subscribe (data => {           
     
                   this.tasks = data;
                   this.dataSource = new MatTableDataSource( this.tasks);
                  })

       }      
            

 


  open(row:Task): void {



   if(row)
         {

              let dialogRef =this.dialog.open(TaskComponent, {
                height: '85%',
                width: '70%',

                data: {
                operation:'update',
                id:row.id,
                titre : row.titre,
                debut : row.datedebut,
                fin : row.dateecheance,
                description : row.description,
                statut : row.statut,
                statmodf : row.statutModif
                }

              });


          }

   else {


    let dialogRef =this.dialog.open(TaskComponent, {
         height: '50%',
          width: '50%',
          data: {operation:'add'}

          });

      }

  }




  Consulter(row:Task):void{

    let dialogRef =this.dialog.open(ConsultTaskComponent, {
      height: '50%',
      width: '40%',
      data: { titre : row.titre,
              debut : row.datedebut,
              fin : row.dateecheance,
              description : row.description,
              statut : row.statut
            }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`); 
    });


  }


}



