import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementTasksService {

  private backUrl= 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) { }

  getTasks():Observable<any>{
    return this.http.get(`${this.backUrl}`);
  }

  getTaskById(id: number):Observable<any>{
    return this.http.get(`${this.backUrl}/${id}`);
  }


}
