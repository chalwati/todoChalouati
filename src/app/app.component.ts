import { Component,ViewChild,AfterViewInit, Inject, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
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

  @ViewChild(MatPaginator) paginator ?: MatPaginator;
  @ViewChild(MatSort) sort ?: MatSort;


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
            

 
ngAfterViewInit() {
    this.dataSource= this.paginator;
    this.dataSource.sort = this.sort;
  }



  open(): void {



   if(true)
         {

              let dialogRef =this.dialog.open(TaskComponent, {
                height: '85%',
                 width: '70%',
              });


              dialogRef.afterClosed().subscribe(result => {
                console.log(`Dialog result`); 
              });

          }

   else {


    let dialogRef =this.dialog.open(TaskComponent, {
         height: '50%',
          width: '50%',
          /*data:{'id:, titre:,description:,comentaire:'}*/

          });


        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result`); 
          });


      }

  }

  Consulter():void{

    let dialogRef =this.dialog.open(ConsultTaskComponent, {
      height: '50%',
       width: '40%',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result`); 
    });


  }


}



