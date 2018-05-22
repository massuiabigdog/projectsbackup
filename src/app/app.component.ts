import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { hammerjs} from 'hammerjs';
import { Spinkit } from 'ng-http-loader/spinkits';

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
  public spinkit = Spinkit;

  constructor() { }

  ngOnInit() {
    $('button').click(function()
  {
    alert('hi');
  })

  $( document ).ready(function() {
    console.log( "ready!" );
    // $( "#divloader" ).addClass( "hidden" );
});
  }
}
export class LoadingComponent {
  public spinkit = Spinkit;
}