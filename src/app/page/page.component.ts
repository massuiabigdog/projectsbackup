import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


declare var jquery:any;
declare var $ :any;

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
      // document.getElementById('mydiv').innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">';
     

    })
  }
}
