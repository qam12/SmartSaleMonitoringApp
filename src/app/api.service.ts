import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyNewInterface} from './my-new-interface';

@Injectable()
export class ApiService {


  private postsURL = '';

  constructor(private http: Http ) {}

 getPosts(): Observable<MyNewInterface[]> {
    return this.http.get(this.postsURL)
    .map((response: Response) => {
       return <MyNewInterface[]>response.json().tblData;
     });
 }

}
