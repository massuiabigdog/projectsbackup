import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';



@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css'],
    providers: [PostService]
})
export class PostComponent implements OnInit {


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


        });

    }

}


export interface Post {
    id: number;
    title: string;
    body: string;
}