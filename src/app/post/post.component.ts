import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
declare var jquery:any;
declare var $ :any;
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
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
  
    ) { }

    ngOnInit() {

        
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            

            //Post
            this.p.getPost(id).subscribe(
                r => this.posts = r,
                error => console.error('Error: ' + error)
            );

            console.log( "ready!" );

            console.log(this.posts);
            $( "#divloader" ).addClass( "hidden" );

        });

    }

}


export interface Post {
    id: number;
    title: string;
    body: string;
}