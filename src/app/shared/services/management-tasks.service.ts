import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Task} from '../models/task'
import{environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ManagementTasksService {

  private backUrl= environment.backendUrl;

  constructor(private http: HttpClient) { }

  getTasks():Observable<any>{
    return this.http.get(`${this.backUrl}/tasks`);
  }

  getTaskById(id: number):Observable<any>{
    return this.http.get(`${this.backUrl}/${id}`);
 }


  addTask(task:Object ):Observable<Object>{
    debugger;
    return this.http.post(`${this.backUrl}/add-task`,task);
  }


  updateTask(task:Object):Observable<Object> {
       return this.http.put(`${this.backUrl}/update-task`,task);
  }



}
