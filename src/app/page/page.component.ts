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
      $( "div.second" ).replaceWith( "<h2><i class='material-icons'>code</i>New heading</h2>" );
      $( ".code" ).replaceWith( "<h2><i class='material-icons'>code</i>1 heading</h2>" );
      $( ".ux" ).replaceWith( "<h2><i class='material-icons'>code</i>2 heading</h2>" );

      $( ".research" ).replaceWith( "<h2><i class='material-icons'>code</i>3 heading</h2>" );

    })
  }
}
