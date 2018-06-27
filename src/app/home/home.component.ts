import { Component, OnInit } from '@angular/core';
import { HomePostService } from '../homepost.service';

declare var jquery:any;
declare var $ :any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomePostService]
})
export class HomeComponent implements OnInit {

    posts:Array<any> = [];

    constructor(private p: HomePostService) {
        this.p.getAll().subscribe(
            result => this.posts = result,

            error => console.error('Error: ')

        );
        console.log(this.posts);


        $( document ).ready(function() {
            setTimeout(() => {
                $( ".divloader" ).addClass( "hidden" );                
            }, 1000);

        });
    }

    ngOnInit() {
        $( function() {
            $( "#research" ).on( "click", function() {
              $( ".research" ).toggleClass( "hidden", 5000 );
              $( "#research" ).toggleClass( "actile-tech", 5000 );
            });
            $( "#code" ).on( "click", function() {
                $( ".code" ).toggleClass( "hidden", 5000 );
                $( "#code" ).toggleClass( "actile-tech", 5000 );
              });
          } );
          $( "#mkt" ).on( "click", function() {
            $( ".tech-mkt" ).toggleClass( "hidden", 5000 );
            $( "#mkt" ).toggleClass( "actile-tech", 5000 );
          });

          $( "#ui" ).on( "click", function() {
            $( ".tech-ui" ).toggleClass( "hidden", 5000 );
            $( "#ui" ).toggleClass( "actile-tech", 5000 );
          });

          $( "#ux" ).on( "click", function() {
            $( ".tech-ux" ).toggleClass( "hidden", 5000 );
            $( "#ux" ).toggleClass( "actile-tech", 5000 );
          });

          $( "#specs" ).on( "click", function() {
            $( ".tech-specs" ).toggleClass( "hidden", 5000 );
            $( "#specs" ).toggleClass( "actile-tech", 5000 );
          });

    }

}
    
