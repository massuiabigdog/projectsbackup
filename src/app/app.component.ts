import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { hammerjs} from 'hammerjs';


declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports: [],
})

export class AppComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  $( document ).ready(function() {
    console.log( "ready!" );

});
  }
}
