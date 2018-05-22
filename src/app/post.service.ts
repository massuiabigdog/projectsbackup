import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var jquery:any;
declare var $ :any;

@Injectable()
export class PostService {

    endpoint = "http://www.tmassuia.16mb.com/api/wp-json/wp/v2/projects";
    


  constructor(private http: Http) {

    console.log(this.endpoint);
    $( "#divloader" ).addClass( "hidden" );

   }

  getAll() {
      return this.http.get(this.endpoint)
          .map(response => response.json());
          
  }


  getPost(id) {
      return this.http.get(this.endpoint + '/' +  id)
          .map(response => response.json());
          
  }
      



}
$( "#divloader" ).addClass( "hidden" );

//     })
