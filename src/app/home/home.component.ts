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
        var $btns = $('.tech').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
})

}
    
}