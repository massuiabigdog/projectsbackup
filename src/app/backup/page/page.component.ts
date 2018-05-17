import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    })
  }
}
  // projects = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get('http://localhost/projects/wordpress/wp-json/wp/v2/projects').subscribe( data => {
//       for(let key in data){
//         if(data.hasOwnProperty(key)){
//           this.projects.push(data[key]);
//         }
//       }

//     })

//   }
// 
