import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready(function() {
      setTimeout(() => {
          $( ".divloader" ).addClass( "hidden" );                
      }, 600);
    }       
    )
  }

}

