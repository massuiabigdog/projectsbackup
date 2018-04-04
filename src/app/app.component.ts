import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

}

// export class AppComponent implements OnInit {

//   projects = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.http.get('http://localhost/projects/wordpress/wp-json/wp/v2/projects').subscribe( data => {
//       for(let key in data){
//         if(data.hasOwnProperty(key)){
//           this.projects.push(data[key]);
//         }
//       }

//       console.log(this.projects);
//     })

//   }
// }

