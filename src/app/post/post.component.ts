import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { CurveComponent} from '../curve/curve.component';
declare var jquery:any;
declare var $ :any;



@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['post.component.css'],
    providers: [PostService]
})
export class PostComponent implements OnInit {
    usedtech: Array<any> = [];
    hasLink = true;
    comments: Array<any> = [];
    posts:any;

    

    constructor(
        private route: ActivatedRoute,
        private p: PostService,
  
    ) {
        
       
    }

    ngOnInit() {
        this.posts = [];
        this.route.params.forEach((params: Params) => {
            
            let id = +params['id'];
            console.log(params);

            //Post
            this.p.getPost(id).subscribe(
                r => this.posts = r,
                error => console.error('Error: ' + error)
            );
        });


        
$(function(){
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function(){
        console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function(){
        console.log('Shown');
    })
    .on('close.simplelightbox', function(){
        console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function(){
        console.log('Closed');
    })
    .on('change.simplelightbox', function(){
        console.log('Requested for change');
    })
    .on('next.simplelightbox', function(){
        console.log('Requested for next');
    })
    .on('prev.simplelightbox', function(){
        console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function(){
        console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function(){
        console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function(){
        console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function(){
        console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function(){
        console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e){
        console.log('No image found, go to the next/prev');
        console.log(e);
    });
});


    }

}




export interface Post {
    id: number;
    title: string;
    body: string;
}
