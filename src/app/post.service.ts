import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    endpoint = "http://localhost/projects/wp-json/wp/v2/projects";
    


  constructor(private http: Http) {

    console.log(this.endpoint);

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

//     })
