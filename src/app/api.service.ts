import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyNewInterface} from './my-new-interface';

@Injectable()
export class ApiService {

  // private postsURL ="https://jsonplaceholder.typicode.com/posts/";

  private postsURL = 'http://58.65.196.114:7070/api/Customer/GetAllShopForMapNew2/01-01-2016/04-15-2018';

  //private postsURL = 'http://localhost:7087/api/Customer/GetAllShopForMapNew2/01-10-2017/15-12-2018';

  constructor(private http: Http ) {}

 getPosts(): Observable<MyNewInterface[]> {
    return this.http.get(this.postsURL)
    .map((response: Response) => {
       return <MyNewInterface[]>response.json().tblData;
     });
 }


// longRequest() {

// const request = new HttpRequest('GET', this.postsURL, {}, {reportProgress: true});

//   this.http.request(request)

//       .subscribe(

//           event => {
//               if (event.type === HttpEventType.DownloadProgress) {
//                   console.log('Download progress event', event);
//               }

//               if (event.type === HttpEventType.UploadProgress) {
//                   console.log('Upload progress event', event);
//               }


//               if (event.type === HttpEventType.Response) {
//                   console.log('response received...', event.body);
//               }
//           }
//       );
// }



 //.catch(this.handleError);
//  private handleError(error: Response) {
//    return Observable.throw(error.statusText);
//  }

}
// private strUrl = 'http://58.65.196.114:7070/api/Customer/GetAllShopForMapNew2/01-01-2016/01-01-2018';
   //private strUrl = 'http://localhost:18438/api/Customer/GetAllShopForMapNew2/01-01-2016/01-01-2018';


   