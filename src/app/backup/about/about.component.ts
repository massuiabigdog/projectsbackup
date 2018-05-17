import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost/projects/wordpress/wp-json/wp/v2/projects').subscribe( data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data[key]);
        }
      }
      console.log(this.posts);
    })

  }
  
}


export class JobListComponent {
    constructor(private router: Router){}
    Jobs = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "React"},
        {"id": 3, "name": "Node"},
    ]
    onSelect(Job){
        this.router.navigate(['/Jobs', Job.name]);
    }

    
}