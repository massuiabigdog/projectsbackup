import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component ({
    template: `<h3>You selected {{JobId}}</h3>`
})
export class JobDetailComponent implements OnInit {
    public JobId;
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.JobId = id;
    }

 }