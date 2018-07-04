import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  posts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    console.log( "start!" );


    this.http.get('http://www.tmassuia.16mb.com/api/wp-json/wp/v2/posts').subscribe( data => {
      
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data[key]);
        }
      }


      console.log(this.posts);
    })

  }
  
}
